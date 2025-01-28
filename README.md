Initial Setup:

I started by creating the canvas with createCanvas(600, 600) and setting a light background color with background(220).
I defined variables to control the circle’s position, size, and color. Initially, the circle is drawn at the center of the canvas with a default size and color.
Handling Mouse Clicks:

I implemented mousePressed() to change the circle’s color whenever the user clicks on the canvas. When clicked, the circle’s color is randomly updated using the random() function, making it visually unpredictable and fun.
Handling Keyboard Inputs:

I added keyboard input detection using the keyPressed() function. This allows the user to adjust the circle's size by pressing specific keys:
Pressing 'R' resets the circle size to 50px.
Pressing 'G' increases the circle size to 80px.
Pressing 'B' decreases the circle size to 30px.
These inputs give the user more control over the circle, allowing for quick changes in its size.
Mouse Movement Interaction:

I added an interaction that changes the circle’s size as the user moves their mouse. The mouseMoved() function allows the circle’s size to adjust based on the mouse's X position. The map() function is used to ensure the circle size scales smoothly with the mouse movement.
Final Result:

The final sketch allows the user to:
Change the circle's color by clicking the mouse.
Control the size of the circle using the 'R', 'G', and 'B' keys.
Modify the size of the circle as the mouse moves horizontally across the screen.
These interactions make the sketch more engaging, and the user has the freedom to experiment with different inputs.
