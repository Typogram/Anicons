# Anicons 

Anicons is the first animated color variable icon font. It is made with two types of technologies: Variable Fonts and Color Fonts. We want to experiment with creating an icon font that combines these two cutting edge font technologies.

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
You can easily incorporate Anicons into your design projects by installing it onto your machine. When you download the Anicons project files, it comes with static versions of the icon font with two weights: Start and End. The static versions help you plan how you will Anicons in your project.

<br/>

<img width="379" alt="AniconStatStart" src="https://user-images.githubusercontent.com/41246474/72045540-587ed380-3284-11ea-8c9a-bea3bdfdcd57.png"><br/>
Start shows the icon at the starting stage of the animation


<img width="379" alt="AniconStatEnd" src="https://user-images.githubusercontent.com/41246474/72045570-6d5b6700-3284-11ea-8ea6-08b6993b30a5.png"><br/>
End shows the icon at the ending stage of the animation



## Use Anicons on the Web

##### 1. Embed Font
To embed Anicons fonts into a webpage, self host the fonts.

##### 2. Specify Icon Character in HTML
Use the following HTML to specify the icon character:
```html
<!-- replace “A” with appropriate character.--> 
<div class=”icon”>A</div>
```

##### 3. Specify Font Family in CSS
Use the following CSS rules to specify the families:
```css
font-family: "Anicons Regular", sans-serif;
font-family: "Anicons Color", sans-serif;
```

##### 4. Animate
Use the following CSS rules to animate the icon. `font-variation-settings` provides control over the variable font characteristics, (in our case, time) of our icon font. 
```css
.icon {
	font-variation-settings: "TIME" 1;
	transition: font-variation-settings 0.4s ease;
}
.icon:hover {
	font-variation-settings: "TIME" 100;
}
```
or use @keyframes animation:
```css
@keyframes icon-animation {
	0% { font-variation-settings: "TIME" 1; }
	100% { font-variation-settings: "TIME" 100; }
}
.icon {
	animation: icon-animation .5s ease-in-out infinite;
}
```

## Learn More

Using variable fonts

* https://theblog.adobe.com/can-variable-fonts-illustrator-cc/
* https://blogs.adobe.com/creative/adobe-indesign-2020/
* https://create.adobe.com/2018/5/22/variable_fonts_are_t.html
* https://blog.sketchapp.com/variable-fonts-improved-opentype-support-and-a-new-data-plugin-whats-new-in-sketch-e16f81bf8b75

Making variable fonts and color fonts

* https://www.harbortype.com/blog/rocher-color-making-a-variable-color-font/
* https://glyphsapp.com/tutorials/creating-a-variable-font
* https://github.com/jenskutilek/RoboChrome
