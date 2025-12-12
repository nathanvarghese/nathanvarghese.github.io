---
layout: page
title: ROS Development Kit
description: Robotics Software Engineering Intern @ Inspector Bots LLC
img: assets/img/minibot_jr.png
importance: 1
category: work
related_publications: false
---

##### Platform: NVIDIA Jetson Orin Nano, Rplidar A1M8, Pi-cam
##### Tools: Linux, Docker, ROS2 Humble, Gazebo, Rviz

Background: Chris (my supervisor) had mentioned that some of his customers asked if he had a development kit for his robots. I was immediately interested in this project since it has a significant overlap with all that I studied at school.

Summary: In this project I focus on making a Development Kit for the Minibot Jr. robot at Inspector Bots. I use an NVIDIA Jetson Orin Nano board, leveraging an Rplidar A1M8 and Pi-camera to enable robust perception capabilities. The work uses Linux-based toolchain with Docker-managed ROS2 Humble environments to ensure reproducibility across devices, supported by Gazebo, Rviz, and rqt for Hardware-in-loop(HIL) and Software-in-loop(SIL) testing, simulation and visualization.

<!-- To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    --- -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/minibot_jr.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetson.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the standard Minibot Jr. with a GoPro camera. Right, a picture of the Jetson nano out of the box.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rviz.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Running rviz inside a Dockerized ROS2 humble container
</div>

<!-- You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
``` -->



{% endraw %}
