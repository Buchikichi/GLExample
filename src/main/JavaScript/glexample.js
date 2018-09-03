/**
 * 
 */
document.addEventListener('DOMContentLoaded', ()=> {
	let field = new Field();
	let gl = field.gl;

	if (!gl) {
		console.log('Failed to get WebGL context.');
		return;
	}
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(0.0, 0.0, 0.1, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.3]), gl.STATIC_DRAW);
	gl.drawArrays(gl.POINTS, 0, 1);
console.log('*** done. ***');
});
