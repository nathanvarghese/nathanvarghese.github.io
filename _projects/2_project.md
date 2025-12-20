---
layout: page
title: AWS Deepracer
description: CSCI 5302 - Advanced Robotics Project
img: assets/img/aws-bot.png
importance: 2
category: work
giscus_comments: false
---

##### Overview
In this project, I develop an autonomous robot to race around a loop at the Engineering Center at CU Boulder. You can watch the development video by clicking on this <a href="https://drive.google.com/file/d/1pwdTHxZFeC73_XauJe-3mFwC-uw4i7T7/view?usp=share_link">link</a>.

**Platform:** AWS Deepracer, Rplidar A1M8
**Tools:** ROS2 Foxy, Linux CLI, rviz, roslaunch, Tailscale (ssh), Github, matplotlib

<iframe src="https://drive.google.com/file/d/1pwdTHxZFeC73_XauJe-3mFwC-uw4i7T7/preview" width="100%" height="480"></iframe>

<br>

##### Challenges and solutions
This project brought a couple unique challenges. The first challenge that we had to overcome was a substantial lag in the system response which on a deeper look was cpu throttling. After a team discussion, we decided that it would be best to modify the roslaunch file which came with the Deepracer and disable unused nodes like the camera_node and web_bridge_node among others. This resulted in lots more headroom in the processing power and snappy **teleop control**.

Secondly, our team was spread apart and busy with various grad courses during different times of the week. We soon came to realise that it was not practical after shuffling the Deepracer back and forth between student dorms. We were already using **ssh** to code on the Deepracer over a local network, but our TA suggested using **Tailscale** (a VPN for secure remote ssh). For our first demo, I coded a wall following **Bug-algorithm** and pushed it to the Deepracer remotely, my friend ran that in his apartment with a makeshift wall and tweaked some of the values for a smoother operation. See the video below!

<iframe src="https://drive.google.com/file/d/1QknChcTU1gFE83X5lUIBqfQZes6sSUrh/preview" width="100%" height="480"></iframe>

The final challenge that we faced was the race track itself that is - sharp corners, random tables, and entryways to lab doors could cause the Deepracer to stop or keep spinning in place. This meant that fine tuning the **PID controller** for steering control on the race track was crucial. I learned about how the rplidar publishes data and how we only needed to consider the readings that were in a particular segment. The combination of these two turned out to be a great choice, since we had the most experience with the track and its caveats. We won the fastest lap in the course on race day, without human interference.


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

<br>

##### Key takeaways
1. Test in real world / client conditions
   - Code may run well in simulations and in an apartment but real world scenarios brings its own unique complications.
   - One team had cpu throttling issues so they implemented a distributeed workload with the processing being done on a laptop and sending the commmands over a ros_bridge, which is great! But the basement of the Engineering center has sparse network connectivity, so their solution wasn't practical. They ended up having to share a local network from a phone and using a trolley to follow their Deepracer around the race track.
2. KISS (Keep it simple stupid)
   - This was the guiding philosophy of our team when it came to the algorithm. A simple bug algorithm, PD based steering control and some intuition with the lidar got us the fastest lap.
3. Distributing remote work is difficult as it is, so have hard conversations early on.
   - We had a teamate who was busy all the time, luckily he did not play a major role. But in hindsight, I would try to understand why they're having a difficult time showing up and make the team expectations clear.

##### Other highlights from the course :-
1. Implemented slam_toolbox using a rosbag
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p11.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p12.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p13.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/slam-p14.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Progression of the ros2 slam_toolbox building the map of the corridor, playback of a rosbag.
</div>

2. Implemented Sampling-based planning with RRT and RRT*:

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

3. Value Iteration and Policy Iteration
   
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/21-states.png" title="rviz" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/51-states.png" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/101-states.png" title="jetson nano" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Value iteration on discritizing the states on the mountain car simulation, a continous-space open-ai gym environment.
</div>