---
layout: page
title: AWS Deepracer
description: CSCI 5302 - Advanced Robotics Project
img: assets/img/aws-bot.png
importance: 2
category: work
giscus_comments: false
---

##### Platform: AWS Deepracer, Rplidar A1M8
##### Tools: ROS2 Foxy, Linux CLI, rviz, roslaunch, Tailscale (ssh), Github
<br>

In this project, I develop an autonomous robot to race around a loop at the Engineering Center at CU Boulder. You can watch the race day video by clicking on this <a href="https://drive.google.com/file/d/1pwdTHxZFeC73_XauJe-3mFwC-uw4i7T7/view?usp=share_link">link</a>.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p11.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p12.png" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p13.png" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p14.png" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Progression of the ros2 slam_toolbox building the map of the corridor, playback of a rosbag.
</div>

This project brought many unique challenges. The processor on the AWS Deepracer was limited and therefore we began with modifying the built-in roslaunch files which would start many unused like the cameraa_node, to optimize. 

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/team-logo.png" title="team logo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/discussion.jpg" title="team discussion" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, team logo. Right, team discussion.
</div>

Another challenge that we faced was fine tuning the PID controller for steering. We ended up opting for a PD controller. Sharp corners, random tables, and entryways to lab doors could cause the Deepracer to stop or keep spinning in place. As a team, we decided that it was best if we fine tuned the PD controller on the race track. This proved to be a great choice, since we had the fastest lap in the course on race day.

##### Other highlights from the course :-
1. Implemented Sampling-based planning with RRT and RRT* 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rrt06_goal_random_0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rrt08_goal_static_0.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, a non-holonpmic path to goal using RRT. Right, holonomic path using RRT.
</div>

2. Value Interation and Policy Iteration
   
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rrt06_goal_random_0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rrt08_goal_static_0.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, a non-holonpmic path to goal using RRT. Right, holonomic path using RRT.
</div>
