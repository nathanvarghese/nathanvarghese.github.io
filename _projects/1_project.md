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
##### Tools: Linux systems, Docker, ROS2 Humble, Gazebo, Rviz, Tailscale (ssh)
<br>

Chris (my supervisor) had mentioned that some of his customers asked if he had a development kit for his robots. I was immediately interested in this project since it has a significant overlap with all that I studied at school.

In this project I focus on making a Development Kit for the Minibot Jr. robot at Inspector Bots. I use an NVIDIA Jetson Orin Nano board, leveraging an Rplidar A1M8 and Pi-camera to enable robust perception capabilities. The work uses Linux-based toolchain with Docker-managed ROS2 Humble environments to ensure reproducibility across devices, supported by Gazebo, Rviz, and rqt for Hardware-in-loop(HIL) and Software-in-loop(SIL) testing, simulation and visualization.

<!---
 To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    --- 
-->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rviz.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetson.jpg" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the standard Minibot Jr. with a GoPro camera. Right, a picture of the Jetson nano out of the box.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/inspector_bots.png" title="company logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Running rviz inside a Dockerized ROS2 humble container
</div>
