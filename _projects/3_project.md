---
layout: page
title: Vision Based Control in WeBots
description: CSCI 5722 - Computer Vision Project
img: assets/img/epuck.png
importance: 3
category: work
---

#### Overview
In this project, I coded a vision based controller using the Webots simulator. It used optical flow to self-center the epuck in the center of a long hallway.

**Platform:** WeBots simulator, ePuck (2-wheeled differetial drive)

**Tools:** OpenCV, C# Scripting

<iframe src="https://drive.google.com/file/d/17g5EbeI37RqF2KFZRTo4L0yPo7MVfRXL/preview" width="100%" height="480"></iframe>
<br>

#### Challenges and solutions
In the grand scheme of projects, this one was much easier but not without its challenges. At first, I had to understand the concept of optical flow in an image.

Process flow
````markdown
[Data Acquisition] → [Optical Flow] → [Flow Analysis] → [Control Decision] → [Lopp / Repeat]
````

1. Data Acquisition
   - Read ````camera_publisher```` from ROS topics
   - Convert image to grayscale (black and white)
   - Resize image if necessary
2. Calculate Optical Flow
   - Use ````cv2.calcOpticalFlow()````
   - Compare with the previous camera frame
   - Return 2D vector flow field
3. Analyze Flow Field
   - Divide wall region into left and right sections
   - Sum optical flow magnitudes
   - Higher flow magnitude indicates closer proximity to a wall
4. Conditional Control Loop
   - If too close to left wall → turn right
   - If too close to right wall → turn left
   - Otherwise → continue forward
5. Continuous Execution
   - Repeat Steps 1–4 in a closed loop

<!-- This page is under development. New content will be added soon. In the meantime enjoy this <a href="https://xkcd.com/1319">xkcd</a> comic! -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/puck-view.png" title="epuck view" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/optical-flow-window.png" title="optical flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the division of the view from the ePuck. Right, optical flow direction vector window.
</div>


<br>

#### Other highlights from the course :-
1. Image Transformation
2. Lucas Kannade algorithm
3. Camera calibration
4. Neural Networks by hand