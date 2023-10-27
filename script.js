// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 223.13,
          "height": 43.93,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Please click\nto enter the fullscreen mode",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 36.93,
          "height": 13.56,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "V.1.2.1",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['click'] = function() {
  // Launch fullscreen mode
  lab.util.fullscreen.launch(document.body)
    // ... if successful, move to next screen
    .then(() => this.end('Fullscreen mode enabled'))
    // ... otherwise, alert the user (this could
    // be changed to continue the study, as above)
    .catch(() => alert('Fullscreen mode not available'))
}

// Please note that that fullscreen mode (at present,
// this will change) needs one more line of code in
// the study style sheet to keep a consistent background
// color. Please find that setting in the study options
// (rightmost toolbar icon), in the CSS tab


////this.options.viewportScale = this.state.viewScale


}
      },
      "viewport": [
        800,
        600
      ],
      "title": "Start fullscreen"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cmain\u003E\n\n\u003Cp\u003EThis experiment should be performed on a fullscreen mode. Once the experiment is finished, the display will exit the fullscreen automatically. Do not exit in the middle of the experiment. If you exit for any reason, press 'F11' which may allow you to go back to the fullscreen again.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf the fullscreen mode is not available, please maximise this window. Make sure not to change the window size in the middle of the experiment for the best results.\u003C\u002Fp\u003E\n\n\u003Ccenter\u003E\n\u003Cbutton type=\"Submit\"\u003ENext\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n\n\u003C\u002Fmain\u003E\n",
          "title": "\u003Ccenter\u003EWelcome to the experiment! \u003C\u002Fcenter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//window.moveTo(0, 0);
//window.resizeTo(screen.availWidth, screen.availHeight);

}
      },
      "title": "Welcome"
    },
    {
      "type": "lab.html.Form",
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

this.options.events['input input'] = function() {
  const scale = document.getElementById('scale').value
  document.getElementById('credit_card')
    .setAttribute(
      'transform',
      `scale(${ scale / 100 })`
    )
}
},
        "end": function anonymous(
) {
// Get the image width and height in browser pixels
const { width, height } = document.querySelector('svg #credit_card rect.card')
  .getBoundingClientRect()

// Compute dpi and dpcm based on this information
this.data.dpi = width / 3.375
this.data.dpcm = width / 8.573
this.data.viewScale=this.data.dpi/100
}
      },
      "title": "ScalingScreen",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cstyle type=\"text\u002Fcss\"\u003E\n      #credit_card line {\n        stroke: var(--color-border);\n        stroke-dasharray: 4;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect {\n        fill: var(--color-gray-background);\n        stroke: var(--color-border);\n        stroke-width: 2;\n        stroke-linecap: butt;\n        stroke-linejoin: round;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect.background {\n        fill: white;\n        stroke: white;\n        stroke-width: 10;\n      }\n    \u003C\u002Fstyle\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\"\n      viewBox=\"-400 -250 800 500\"\n      style=\"width: 800px; height: 500px\"\u003E\n      \u003Cg\n        id=\"credit_card\"\n        transform=\"scale(1)\"\n      \u003E\n        \u003Cline x1=\"-168.75\" y1=\"-2000\" x2=\"-168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"168.75\" y1=\"-2000\" x2=\"168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"-106.25\" x2=\"2000\" y2=\"-106.25\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"106.25\" x2=\"2000\" y2=\"106.25\" \u002F\u003E\n        \u003Crect\n          class=\"background\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n        \u003Crect\n          class=\"card\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n      \u003C\u002Fg\u003E\n    \u003C\u002Fsvg\u003E\n    \u003Cdiv class=\"m-l\" \u003E\n      \u003Cp class=\"font-weight-bold content-horizontal-center\"\u003E\n        Please use the slide bar below to adjust the size of the rectangle to match the size of your University ID card or credit card (you can also use most membership cards that have the same size as a credit card). Click the 'submit' button if you are happy with the size of the rectangle.\n      \u003C\u002Fp\u003E\n      \u003Cform id=\"pumps-form\"\u003E\n        \u003Cinput \n          type=\"range\" \n          name=\"scale\" id=\"scale\"\n          class=\"w-l\"\n          min=\"20\" max=\"200\" value = \"100\"\n        \u003E\n        \u003Cbutton type=\"submit\"\u003ESumit\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.state.block=0;

document.body.style.cursor = 'none';

let shapeArray=["square","diamond"];
let colourArray=["red","green"];
let roleArray=["SHAPE","COLOUR"];
let cueArray=["++++","XXXX"];

shapeArray.sort(() => Math.random() - 0.5);
colourArray.sort(() => Math.random() - 0.5);
roleArray.sort(() => Math.random() - 0.5);
cueArray.sort(() => Math.random() - 0.5);

this.parameters.shape1=shapeArray[0];
this.parameters.shape2=shapeArray[1];

this.parameters.colour1=colourArray[0];
this.parameters.colour2=colourArray[1];

this.parameters.roleA=roleArray[0];
this.parameters.roleB=roleArray[1];

this.parameters.cueA=cueArray[0];
this.parameters.cueB=cueArray[1];
}
      },
      "title": "Main_sequence",
      "tardy": true,
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 700.29,
              "height": 310.25,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Welcome!\n\nIn this experiment, your task is to perform a choice-reaction task.  \n\nEach trial presents a task cue, followed by the target.  \n\nRespond to the target as quickly as possible. \n\n\nPress SPACE",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstMain"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "blockActor": "A"
            },
            {
              "blockActor": "B"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Individual_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
if(this.parameters.blockActor==="A"){

  this.parameters.leftKey="A";
  this.parameters.rightKey="D";
  this.parameters.goSignal=this.parameters.cueA;
  this.parameters.nogoSignal=this.parameters.cueB;

  if(this.parameters.roleA==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleA==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}else if(this.parameters.blockActor==="B"){

  this.parameters.leftKey="J";
  this.parameters.rightKey="L";
  this.parameters.goSignal=this.parameters.cueB;
  this.parameters.nogoSignal=this.parameters.cueA;

  if(this.parameters.roleB==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleB==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}
}
            },
            "title": "Individual_Prac_Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 771.19,
                    "height": 209.1,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "This is a practice block.\n\nIn the following blocks, please use the '${parameters.leftKey}' and '${parameters.rightKey}' keys. \nThese are your 'left' and 'right' keys for this block. \n\nPlace your index fingers on the left and right keys.\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Inst1",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 556.8,
                    "height": 303.47,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "On each trial, you will first see a task cue, which is \"++++\" or \"XXXX\". \nThis will be followed by the target.\n\nIf the task cue is \"${parameters.goSignal}\", then: \n\nPress the left key if the target is ${parameters.leftStim}, \nand press the right key if the target is ${parameters.rightStim}.\n\nWhen the task cue is \"${parameters.nogoSignal}\", do nothing and \nremain silent until the trial ends.\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "Inst2",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 368.14,
                    "height": 114.72,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "You will now start practice trials. \nMake sure to familiarize yourself with the task.\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "Inst3"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 102.05,
                    "height": 91.12,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Ready?\n\n\nPress Space",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "ready"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "TEST": "0",
                    "trialType": "go"
                  },
                  {
                    "TEST": "0",
                    "trialType": "go"
                  },
                  {
                    "TEST": "0",
                    "trialType": "go"
                  },
                  {
                    "TEST": "0",
                    "trialType": "go"
                  },
                  {
                    "TEST": "0",
                    "trialType": "nogo"
                  },
                  {
                    "TEST": "0",
                    "trialType": "nogo"
                  },
                  {
                    "TEST": "0",
                    "trialType": "nogo"
                  },
                  {
                    "TEST": "0",
                    "trialType": "nogo"
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": ""
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
                },
                "title": "Individual_Prac_loop",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var task
var actor
var rNum

this.parameters.actor=this.parameters.blockActor;

// select go or nogo trial
if(this.parameters.trialType==="go"){
  cue=this.parameters.goSignal;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp=this.parameters.leftKey;
  }else{
    cResp=this.parameters.rightKey;
  }

  // select task
  if(this.parameters.actor==="A"){
    task=this.parameters.roleA;
  }else if(this.parameters.actor==="B"){
    task=this.parameters.roleB;
  }

}else{
  cue=this.parameters.nogoSignal;
  cResp="";
  
  // select task
  if(this.parameters.actor==="A"){
    task=this.parameters.roleB;
  }else if(this.parameters.actor==="B"){
    task=this.parameters.roleA;
  }
}

// select stimulus features
if(cResp===""){
  rNum=Math.random();
  if(rNum<.25){
    stimShape=this.parameters.shape1;
    stimColour=this.parameters.colour1;
    this.parameters.rComp="comp";
  }else if(rNum<.5){
    stimShape=this.parameters.shape1;
    stimColour=this.parameters.colour2;
    this.parameters.rComp="incomp";
  }else if(rNum<.75){
    stimShape=this.parameters.shape2;
    stimColour=this.parameters.colour1;
    this.parameters.rComp="incomp";
  }else{
    stimShape=this.parameters.shape2;
    stimColour=this.parameters.colour2;
    this.parameters.rComp="comp";
  }

}else if(cResp===this.parameters.leftKey){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape1;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="comp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="incomp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour1;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="comp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="incomp";
    }
  }
}else if(cResp===this.parameters.rightKey){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape2;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="incomp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="comp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour2;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="incomp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="comp";
    }
  }
}

this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.task=task;


}
                  },
                  "title": "Individual_Prac_Trial_Sequence",
                  "tardy": true,
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 435.8,
                          "height": 45.2,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.taskCue}",
                          "fontStyle": "normal",
                          "fontWeight": "bold",
                          "fontSize": "40",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                      },
                      "title": "task_cue",
                      "timeout": "1500"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "167",
                          "height": "167",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[parameters.target + \".bmp\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "greendiamond.bmp": "embedded\u002Ffd2a8d1da35131b52f488d09fa4e27c237006d69356b6add2301e468be152141.bmp",
                        "greensquare.bmp": "embedded\u002Fc0a8a0e4e90d58936095445775f87c16b1102c8650768aa077b2d9f8858aa82e.bmp",
                        "reddiamond.bmp": "embedded\u002F5260181f0b316a5f72d0c448c7e07765ae155865cba40b4a2d4030ce308937da.bmp",
                        "redsquare.bmp": "embedded\u002Fed6ad69a56d3a0dd63e33b8c93575f2a1fe37189ead1fc732b503a9808703266.bmp"
                      },
                      "responses": {
                        "keypress(a)": "A",
                        "keypress(d)": "D",
                        "keypress(j)": "J",
                        "keypress(l)": "L"
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                      },
                      "title": "stim",
                      "timeout": "1500",
                      "tardy": true,
                      "correctResponse": "${parameters.corrResp}"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 339.78,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.feedback}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "24",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Do not respond";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Faster!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.leftKey | this.state.response===this.parameters.rightKey ){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC = 1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC = 0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }
}


}
                      },
                      "title": "feedback",
                      "timeout": "1000",
                      "tardy": true
                    }
                  ]
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 343.47,
                    "height": 185.5,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Practice is over!\n\nThe test trials start here. Try to respond as \nquickly and as accurately as you can!\n\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "Inst_PracticeOver"
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if(this.parameters.blockActor==="A"){

  this.parameters.leftKey="A";
  this.parameters.rightKey="D";
  this.parameters.goSignal=this.parameters.cueA;
  this.parameters.nogoSignal=this.parameters.cueB;

  if(this.parameters.roleA==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleA==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}else if(this.parameters.blockActor==="B"){

  this.parameters.leftKey="J";
  this.parameters.rightKey="L";
  this.parameters.goSignal=this.parameters.cueB;
  this.parameters.nogoSignal=this.parameters.cueA;

  if(this.parameters.roleB==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleB==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}
}
                },
                "title": "Individual_Test_Sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 492.09,
                        "height": 256.28,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember\n\nIf the task cue is \"${parameters.goSignal}\": \n\nPress the left key if the target is ${parameters.leftStim}, \nPress the right key if the target is ${parameters.rightStim}.\n\nWhen the task cue is \"${parameters.nogoSignal}\", do nothing.\n\n\nPress SPACE",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "Inst1",
                    "tardy": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 102.05,
                        "height": 91.12,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Ready?\n\n\nPress Space",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "ready"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "TEST": "1",
                        "trialType": "go"
                      },
                      {
                        "TEST": "1",
                        "trialType": "go"
                      },
                      {
                        "TEST": "1",
                        "trialType": "go"
                      },
                      {
                        "TEST": "1",
                        "trialType": "go"
                      },
                      {
                        "TEST": "1",
                        "trialType": "nogo"
                      },
                      {
                        "TEST": "1",
                        "trialType": "nogo"
                      },
                      {
                        "TEST": "1",
                        "trialType": "nogo"
                      },
                      {
                        "TEST": "1",
                        "trialType": "nogo"
                      }
                    ],
                    "sample": {
                      "mode": "draw-shuffle",
                      "n": "96"
                    },
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
                    },
                    "title": "Individual_Test_loop",
                    "tardy": true,
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var task
var actor
var rNum

this.parameters.actor=this.parameters.blockActor;

// select go or nogo trial
if(this.parameters.trialType==="go"){
  cue=this.parameters.goSignal;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp=this.parameters.leftKey;
  }else{
    cResp=this.parameters.rightKey;
  }

  // select task
  if(this.parameters.actor==="A"){
    task=this.parameters.roleA;
  }else if(this.parameters.actor==="B"){
    task=this.parameters.roleB;
  }

}else{
  cue=this.parameters.nogoSignal;
  cResp="";
  
  // select task
  if(this.parameters.actor==="A"){
    task=this.parameters.roleB;
  }else if(this.parameters.actor==="B"){
    task=this.parameters.roleA;
  }
}

// select stimulus features
if(cResp===""){
  rNum=Math.random();
  if(rNum<.25){
    stimShape=this.parameters.shape1;
    stimColour=this.parameters.colour1;
    this.parameters.rComp="comp";
  }else if(rNum<.5){
    stimShape=this.parameters.shape1;
    stimColour=this.parameters.colour2;
    this.parameters.rComp="incomp";
  }else if(rNum<.75){
    stimShape=this.parameters.shape2;
    stimColour=this.parameters.colour1;
    this.parameters.rComp="incomp";
  }else{
    stimShape=this.parameters.shape2;
    stimColour=this.parameters.colour2;
    this.parameters.rComp="comp";
  }

}else if(cResp===this.parameters.leftKey){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape1;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="comp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="incomp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour1;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="comp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="incomp";
    }
  }
}else if(cResp===this.parameters.rightKey){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape2;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="incomp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="comp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour2;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="incomp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="comp";
    }
  }
}

this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.task=task;

}
                      },
                      "title": "Individual_Test_Trial_Sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 435.8,
                              "height": 45.2,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.taskCue}",
                              "fontStyle": "normal",
                              "fontWeight": "bold",
                              "fontSize": "40",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "task_cue",
                          "timeout": "1500"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": "167",
                              "height": "167",
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ this.files[parameters.target + \".bmp\"] }"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "greendiamond.bmp": "embedded\u002Ffd2a8d1da35131b52f488d09fa4e27c237006d69356b6add2301e468be152141.bmp",
                            "greensquare.bmp": "embedded\u002Fc0a8a0e4e90d58936095445775f87c16b1102c8650768aa077b2d9f8858aa82e.bmp",
                            "reddiamond.bmp": "embedded\u002F5260181f0b316a5f72d0c448c7e07765ae155865cba40b4a2d4030ce308937da.bmp",
                            "redsquare.bmp": "embedded\u002Fed6ad69a56d3a0dd63e33b8c93575f2a1fe37189ead1fc732b503a9808703266.bmp"
                          },
                          "responses": {
                            "keypress(a)": "A",
                            "keypress(d)": "D",
                            "keypress(j)": "J",
                            "keypress(l)": "L"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "stim",
                          "timeout": "1500",
                          "tardy": true,
                          "correctResponse": "${parameters.corrResp}"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 339.78,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.feedback}",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "24",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.corrResp===""){
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Good";
    this.parameters.ACC=1;
  }else{
    this.parameters.feedback="Do not respond";
    this.parameters.ACC=0;
  }

}else{
  if(this.state.ended_on==="timeout"){
    this.parameters.feedback="Faster!";
    this.parameters.ACC=2;
  }else{
    if(this.state.response===this.parameters.leftKey | this.state.response===this.parameters.rightKey ){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC = 1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC = 0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }
}


}
                          },
                          "title": "feedback",
                          "timeout": "1000",
                          "tardy": true
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "blockActor": "joint"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Fulltask_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
if(this.parameters.roleA==="SHAPE"){
  
  this.parameters.stimA1=this.parameters.shape1;
  this.parameters.stimA2=this.parameters.shape2;
  this.parameters.stimB1=this.parameters.colour1;
  this.parameters.stimB2=this.parameters.colour2;

}else if(this.parameters.roleA==="COLOUR"){
  
  this.parameters.stimB1=this.parameters.shape1;
  this.parameters.stimB2=this.parameters.shape2;
  this.parameters.stimA1=this.parameters.colour1;
  this.parameters.stimA2=this.parameters.colour2;
}

}
            },
            "title": "Fulltask_Prac_Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 494.22,
                    "height": 232.69,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "This is the second phase of the experiment!\n\nIn the following blocks, you will perform the two tasks you just \nperformed in the preceding blocks. \n\nPlace your left middle and index fingers on 'A' and 'D'; \nplace your right index and middle fingers on 'J' and 'L'. \n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Inst1"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 576.2,
                    "height": 327.07,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "If the task cue is \"${parameters.cueA}\", use the left hand and:\n\nPress the left key if the target is ${parameters.stimA1}.\nPress the right key if the target is ${parameters.stimA2}.\n\nIf the task cue is \"${parameters.cueB}\", use the right hand:\n\nPress the left key if the target is ${parameters.stimB1}.\nPress the right key if the target is ${parameters.stimB2}.\n\nThe first block is practice. Make sure to familiarize yourself with the task.\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "Inst2",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 102.05,
                    "height": 91.12,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Ready?\n\n\nPress Space",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "ready"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "A"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  },
                  {
                    "TEST": "0",
                    "actor": "B"
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": ""
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
                },
                "title": "Fulltask_Prac_loop",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var task
var actor
var rNum

this.parameters.trialType="joint";

// select a task (actor)
if(this.parameters.actor==="A"){
  cue=this.parameters.cueA;
  task=this.parameters.roleA;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="A";
  }else{
    cResp="D";
  }

}else{
  cue=this.parameters.cueB;
  task=this.parameters.roleB;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="J";
  }else{
    cResp="L";
  }
}


// select stimulus features
if(cResp==="A" | cResp==="J"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape1;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="comp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="incomp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour1;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="comp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="incomp";
    }
  }
}if(cResp==="D" | cResp==="L"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape2;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="incomp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="comp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour2;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="incomp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="comp";
    }
  }
}

this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.task=task;


}
                  },
                  "title": "Fulltask_Prac_Trial_Sequence",
                  "tardy": true,
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 435.8,
                          "height": 45.2,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.taskCue}",
                          "fontStyle": "normal",
                          "fontWeight": "bold",
                          "fontSize": "40",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                      },
                      "title": "task_cue",
                      "timeout": "1500"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "image",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": "167",
                          "height": "167",
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[parameters.target + \".bmp\"] }"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "greendiamond.bmp": "embedded\u002Ffd2a8d1da35131b52f488d09fa4e27c237006d69356b6add2301e468be152141.bmp",
                        "greensquare.bmp": "embedded\u002Fc0a8a0e4e90d58936095445775f87c16b1102c8650768aa077b2d9f8858aa82e.bmp",
                        "reddiamond.bmp": "embedded\u002F5260181f0b316a5f72d0c448c7e07765ae155865cba40b4a2d4030ce308937da.bmp",
                        "redsquare.bmp": "embedded\u002Fed6ad69a56d3a0dd63e33b8c93575f2a1fe37189ead1fc732b503a9808703266.bmp"
                      },
                      "responses": {
                        "keypress(a)": "A",
                        "keypress(d)": "D",
                        "keypress(j)": "J",
                        "keypress(l)": "L"
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                      },
                      "title": "stim",
                      "timeout": "1500",
                      "tardy": true,
                      "correctResponse": "${parameters.corrResp}"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 339.78,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.feedback}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "24",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.ended_on==="timeout"){
  this.parameters.feedback="Faster!";
  this.parameters.ACC=2;
}else{
  if(this.parameters.actor==="A"){
    if(this.state.response==="A"|this.state.response==="D"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }else   if(this.parameters.actor==="B"){
    if(this.state.response==="J"|this.state.response==="L"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }
}




}
                      },
                      "title": "feedback",
                      "timeout": "1000",
                      "tardy": true
                    }
                  ]
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 646.63,
                    "height": 185.5,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Practice is over!\n\nThe test trials start here.  Try to respond as quickly and as accuratley as you can!\n\nThere will be two test blocks.\n\n\nPress SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "18",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(Space)": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                },
                "title": "Inst_PracticeOver"
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if(this.parameters.blockActor==="A"){

  this.parameters.leftKey="a";
  this.parameters.rightKey="d";
  this.parameters.goSignal=this.parameters.cueA;
  this.parameters.nogoSignal=this.parameters.cueB;

  if(this.parameters.roleA==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleA==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}else if(this.parameters.blockActor==="B"){

  this.parameters.leftKey="j";
  this.parameters.rightKey="l";
  this.parameters.goSignal=this.parameters.cueB;
  this.parameters.nogoSignal=this.parameters.cueA;

  if(this.parameters.roleB==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleB==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}
}
                },
                "title": "Fulltask_Test_Sequence1",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 490.08,
                        "height": 327.07,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember\n\nIf the task cue is \"${parameters.cueA}\", use the left hand and:\n\nPress the left key if the target is ${parameters.stimA1}.\nPress the right key if the target is ${parameters.stimA2}.\n\nIf the task cue is \"${parameters.cueB}\", use the right hand:\n\nPress the left key if the target is ${parameters.stimB1}.\nPress the right key if the target is ${parameters.stimB2}.\n\n\nPress SPACE",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "Inst1",
                    "tardy": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 102.05,
                        "height": 91.12,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Ready?\n\n\nPress Space",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "ready"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      }
                    ],
                    "sample": {
                      "mode": "draw-shuffle",
                      "n": "96"
                    },
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
                    },
                    "title": "Fulltask_Test_loop",
                    "tardy": true,
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var task
var actor
var rNum

this.parameters.trialType="joint";

// select a task (actor)
if(this.parameters.actor==="A"){
  cue=this.parameters.cueA;
  task=this.parameters.roleA;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="A";
  }else{
    cResp="D";
  }

}else{
  cue=this.parameters.cueB;
  task=this.parameters.roleB;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="J";
  }else{
    cResp="L";
  }
}


// select stimulus features
if(cResp==="A" | cResp==="J"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape1;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="comp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="incomp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour1;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="comp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="incomp";
    }
  }
}if(cResp==="D" | cResp==="L"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape2;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="incomp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="comp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour2;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="incomp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="comp";
    }
  }
}

this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.task=task;


}
                      },
                      "title": "Fulltask_Prac_Trial_Sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 435.8,
                              "height": 45.2,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.taskCue}",
                              "fontStyle": "normal",
                              "fontWeight": "bold",
                              "fontSize": "40",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "task_cue",
                          "timeout": "1500"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": "167",
                              "height": "167",
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ this.files[parameters.target + \".bmp\"] }"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "greendiamond.bmp": "embedded\u002Ffd2a8d1da35131b52f488d09fa4e27c237006d69356b6add2301e468be152141.bmp",
                            "greensquare.bmp": "embedded\u002Fc0a8a0e4e90d58936095445775f87c16b1102c8650768aa077b2d9f8858aa82e.bmp",
                            "reddiamond.bmp": "embedded\u002F5260181f0b316a5f72d0c448c7e07765ae155865cba40b4a2d4030ce308937da.bmp",
                            "redsquare.bmp": "embedded\u002Fed6ad69a56d3a0dd63e33b8c93575f2a1fe37189ead1fc732b503a9808703266.bmp"
                          },
                          "responses": {
                            "keypress(a)": "A",
                            "keypress(d)": "D",
                            "keypress(j)": "J",
                            "keypress(l)": "L"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "stim",
                          "timeout": "1500",
                          "tardy": true,
                          "correctResponse": "${parameters.corrResp}"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 339.78,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.feedback}",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "24",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.ended_on==="timeout"){
  this.parameters.feedback="Faster!";
  this.parameters.ACC=2;
}else{
  if(this.parameters.actor==="A"){
    if(this.state.response==="A"|this.state.response==="D"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }else   if(this.parameters.actor==="B"){
    if(this.state.response==="J"|this.state.response==="L"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }
}




}
                          },
                          "title": "feedback",
                          "timeout": "1000",
                          "tardy": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if(this.parameters.blockActor==="A"){

  this.parameters.leftKey="a";
  this.parameters.rightKey="d";
  this.parameters.goSignal=this.parameters.cueA;
  this.parameters.nogoSignal=this.parameters.cueB;

  if(this.parameters.roleA==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleA==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}else if(this.parameters.blockActor==="B"){

  this.parameters.leftKey="j";
  this.parameters.rightKey="l";
  this.parameters.goSignal=this.parameters.cueB;
  this.parameters.nogoSignal=this.parameters.cueA;

  if(this.parameters.roleB==="SHAPE"){
    this.parameters.leftStim=this.parameters.shape1;
    this.parameters.rightStim=this.parameters.shape2;
  }else if(this.parameters.roleB==="COLOUR"){
    this.parameters.leftStim=this.parameters.colour1;
    this.parameters.rightStim=this.parameters.colour2;
  }
}
}
                },
                "title": "Fulltask_Test_Sequence2",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 490.08,
                        "height": 327.07,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember\n\nIf the task cue is \"${parameters.cueA}\", use the left hand and:\n\nPress the left key if the target is ${parameters.stimA1}.\nPress the right key if the target is ${parameters.stimA2}.\n\nIf the task cue is \"${parameters.cueB}\", use the right hand:\n\nPress the left key if the target is ${parameters.stimB1}.\nPress the right key if the target is ${parameters.stimB2}.\n\n\nPress SPACE",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "Inst1",
                    "tardy": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 102.05,
                        "height": 91.12,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Ready?\n\n\nPress Space",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "18",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
                    },
                    "title": "ready"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "A"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      },
                      {
                        "TEST": "1",
                        "actor": "B"
                      }
                    ],
                    "sample": {
                      "mode": "draw-shuffle",
                      "n": "96"
                    },
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
}
                    },
                    "title": "Fulltask_Test_loop",
                    "tardy": true,
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

var cue
var stimColour
var stimShape
var cResp
var task
var actor
var rNum

this.parameters.trialType="joint";

// select a task (actor)
if(this.parameters.actor==="A"){
  cue=this.parameters.cueA;
  task=this.parameters.roleA;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="A";
  }else{
    cResp="D";
  }

}else{
  cue=this.parameters.cueB;
  task=this.parameters.roleB;

  // select correct response
  rNum=Math.random();
  if(rNum<.5){
    cResp="J";
  }else{
    cResp="L";
  }
}


// select stimulus features
if(cResp==="A" | cResp==="J"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape1;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="comp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="incomp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour1;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="comp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="incomp";
    }
  }
}if(cResp==="D" | cResp==="L"){
  if(task==="SHAPE"){
    stimShape=this.parameters.shape2;
    rNum=Math.random();
    if(rNum<.5){
      stimColour=this.parameters.colour1;
      this.parameters.rComp="incomp";
    }else{
      stimColour=this.parameters.colour2;
      this.parameters.rComp="comp";
    }
  }else if(task==="COLOUR"){
    stimColour=this.parameters.colour2;
    rNum=Math.random();
    if(rNum<.5){
      stimShape=this.parameters.shape1;
      this.parameters.rComp="incomp";
    }else{
      stimShape=this.parameters.shape2;
      this.parameters.rComp="comp";
    }
  }
}

this.parameters.target= stimColour + stimShape;
this.parameters.taskCue=cue;
this.parameters.corrResp=cResp;
this.parameters.task=task;


}
                      },
                      "title": "Fulltask_Prac_Trial_Sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 435.8,
                              "height": 45.2,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.taskCue}",
                              "fontStyle": "normal",
                              "fontWeight": "bold",
                              "fontSize": "40",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "task_cue",
                          "timeout": "1500"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": "167",
                              "height": "167",
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ this.files[parameters.target + \".bmp\"] }"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "greendiamond.bmp": "embedded\u002Ffd2a8d1da35131b52f488d09fa4e27c237006d69356b6add2301e468be152141.bmp",
                            "greensquare.bmp": "embedded\u002Fc0a8a0e4e90d58936095445775f87c16b1102c8650768aa077b2d9f8858aa82e.bmp",
                            "reddiamond.bmp": "embedded\u002F5260181f0b316a5f72d0c448c7e07765ae155865cba40b4a2d4030ce308937da.bmp",
                            "redsquare.bmp": "embedded\u002Fed6ad69a56d3a0dd63e33b8c93575f2a1fe37189ead1fc732b503a9808703266.bmp"
                          },
                          "responses": {
                            "keypress(a)": "A",
                            "keypress(d)": "D",
                            "keypress(j)": "J",
                            "keypress(l)": "L"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                          },
                          "title": "stim",
                          "timeout": "1500",
                          "tardy": true,
                          "correctResponse": "${parameters.corrResp}"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 339.78,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${parameters.feedback}",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "24",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.ended_on==="timeout"){
  this.parameters.feedback="Faster!";
  this.parameters.ACC=2;
}else{
  if(this.parameters.actor==="A"){
    if(this.state.response==="A"|this.state.response==="D"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }else   if(this.parameters.actor==="B"){
    if(this.state.response==="J"|this.state.response==="L"){
      if(this.state.response===this.parameters.corrResp){
        this.parameters.feedback="Good";
        this.parameters.ACC=1;
      }else{
        this.parameters.feedback="Error";
        this.parameters.ACC=0;
      }
    }else{
      this.parameters.feedback="Wrong hand!";
      this.parameters.ACC=3;
    }
  }
}




}
                          },
                          "title": "feedback",
                          "timeout": "1000",
                          "tardy": true
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp style=\"text-align: center;\"\u003E\nYou have completed all trials!\nPlease wait until the next page is loaded...\n\u003C\u002Fp\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
document.body.style.cursor = 'pointer';
}
      },
      "title": "Bye",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()