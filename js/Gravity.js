function makeFall(posX0, vX, t, posY0, vY0) {
  /* x = x0 + (vx * t) */
  var x = posX0 + (vX * t);
  /* y = y0 + (vy0 * t) + (1/2 * a * t^2) */
  var y = posY0 + (vY0 * t) + (VY_KTE * G * t * t);
  var time = t + OFFSET;
  return [x, y, time];
}