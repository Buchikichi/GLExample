class GLField {
	constructor() {
		let canvas = document.querySelector("canvas")	

		this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (!this.gl) {
			return;
		}
		this.initializeShader();
		this.initializeAttributes();
	}

	createShader(id) {
		let gl = this.gl;
		let element = document.querySelector('#' + id);
		let type = element.getAttribute('type');
		let shaderType = (type.endsWith('vertex') ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
		let shader = gl.createShader(shaderType);
		let source = element.textContent;

		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		return shader;
	}

	initializeShader() {
		let gl = this.gl;
		let shaders = [this.createShader('vertex-shader'), this.createShader('fragment-shader')];

		this.program = gl.createProgram();
		shaders.forEach(shader => gl.attachShader(this.program, shader));
		gl.linkProgram(this.program);
		gl.useProgram(this.program);
		shaders.forEach(shader => {
			gl.detachShader(this.program, shader)
			gl.deleteShader(shader)
		});
	}

	initializeAttributes() {
		let gl = this.gl;

		this.buffer = gl.createBuffer();
		gl.enableVertexAttribArray(0);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0]), gl.STATIC_DRAW);
		gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
	}
}
