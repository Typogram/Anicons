# Anicons 

Anicons is the first animated color variable icon font. It is made with two types of technologies: Variable Fonts and Color Fonts. We want to experiment with the potentials created by combining these two cutting edge font technologies with an icon font.

## Icons
- menu
- play
- favorite
- thumb_up
- check
- notifications
- edit
- lock
- phone
- search
- location

## Use Anicons in your design projects 
You can easily incorporate Anicons into your design projects by installing it onto your machine. When you download the Anicons project files, it comes with a static version of the icon font with two weights: Start and End. This helps you plan how you will Anicons in your project.

<img width="379" alt="AniconStatStart" src="https://user-images.githubusercontent.com/41246474/72045540-587ed380-3284-11ea-8c9a-bea3bdfdcd57.png">
*Start shows the icon at the starting stage of the animation*

<img width="379" alt="AniconStatEnd" src="https://user-images.githubusercontent.com/41246474/72045570-6d5b6700-3284-11ea-8ea6-08b6993b30a5.png">
*End shows the icon at the ending stage of the animation*


## Use Anicons on the Web

##### 1. Embed Font
To embed Anicons fonts into a webpage, copy this code into the <head> of your HTML document. 

Use the following HTML to embed Anicons Regular:
```
<link href="https://fonts.googleapis.com/css?family=Anicons+Regular&display=swap" rel="stylesheet">
```
Use the following HTML to embed Anicons Color:
```
<link href="https://fonts.googleapis.com/css?family=Anicons+Color&display=swap" rel="stylesheet">
```
Use the following HTML to embed Anicons Regular and Anicons Color:
```
<link href="https://fonts.googleapis.com/css?family=Anicons+Regular|Anicons+Color&display=swap" rel="stylesheet">
```
##### 2. Specify Icon Character in HTML

Use the following HTML to specify the icon character:
```
<!-- replace “A” with appropriate character.--> 
<div class=”icon”>A</div>
```
##### 3. Specify Font Family in CSS

Use the following CSS rules to specify the families:
```
font-family: "Anicons Regular", sans-serif;
font-family: "Anicons Color", sans-serif;
```
##### 4. Animate
Use the following CSS rules to animate the icon. `font-variation-settings` provides control over the variable font characteristics, (in our case, time) of our icon font. 
```
.icon {
	font-variation-settings: "TIME" 1;
	transition: font-variation-settings 0.4s ease;
}
.icon:hover {
	 font-variation-settings: "TIME" 100;
}
```
or use @keyframes animation:
```
@keyframes icon-animation {
    0% { font-variation-settings: "TIME" 1; }
	100% { font-variation-settings: "TIME" 100; }
}
.icon {
    animation: icon-animation .5s ease-in-out infinite;
}
```
## Reference
https://www.harbortype.com/blog/rocher-color-making-a-variable-color-font/
https://glyphsapp.com/tutorials/creating-a-variable-font


