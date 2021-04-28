const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment');
var admin = require("firebase-admin");

var serviceAccount = require('./config/gl-final-opar-firebase-adminsdk-1l4ja-a95dd486c6');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gl-final-opar-default-rtdb.firebaseio.com"
  });

  console.log("Connected to DB");
  
} catch (error) {
  console.log("Error here" + error);
  
}

var db = admin.firestore();

app.get('/', (req,res)=>{
    res.send("We are live")
});

app.post('/', express.json(), (req ,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });
    function demo(agent)
    {
        agent.add("Sending response from server");
    }
    function Welcome(agent){
        agent.add("Greetings. How can I assist you today! Kindly choose one.")
        var payloadData ={
            "richContent": [
                [
                  {
                    "type": "chips",
                    "options": [
                      {
                        "text": "Know More",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                          }
                        }},
                      {
                        "text": "Talk to therapist",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                          }
                        }
                      },
                      {
                        "text": "I have some issues",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                          }
                        }
                      },
                      {
                        "text": "Just Browsing",
                        "image": {
                          "src": {
                            "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                          }
                        }
                      }
                      
                    ]
                  }
                ]
              ]
        }
        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
        }
        function Know(agent){
            var payloadData ={
                "richContent": [
                    [
                        {
                            "type": "accordion",
                            "title": "Our Services",
                            "subtitle": "We offer: One-to-One therapy Sessions, Webinars, Mental health courses, workshops and Self Evaluation Tests.",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/07/cover2-1024x595.png"
                              }
                            },
                            "text": "We are passionate about making mental health services accessible. We offer end to end services for creating mental health awareness in your office and otherwise. We aim to equip you to fight the battles against mental health problems faced by you or your near ones."
                          },
                          {
                            "type": "button",
                            "icon": {
                              "type": "chevron_right",
                              "color": "#FF9800"
                            },
                            "text": "Our Experts",
                            "link": "https://www.goodlives.in/experts/",
                            "event": {
                              "name": "",
                              "languageCode": "",
                              "parameters": {}
                            }
                          },
                          {
                            "type": "button",
                            "icon": {
                              "type": "chevron_right",
                              "color": "#FF9800"
                            },
                            "text": "Testimonials",
                            "link": "https://www.goodlives.in/testimonials/",
                            "event": {
                              "name": "",
                              "languageCode": "",
                              "parameters": {}
                            }
                          },

                      {
                        "type": "chips",
                        "options": [
                          {
                            "text": "Our Team",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                              }
                            }},
                          {
                            "text": "Therapies we offer!",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                              }
                            }
                          },
                          {
                            "text": "Types of Therapists",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                              }
                            }
                          }
                          
                          
                        ]
                      }
                    ]
                  ]
            }
            agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
            }
            function problem(agent){
                var payloadData ={
                    "richContent": [
                        [
                            {
                                "type": "info",
                                "title": "Check Out our blog for inspiration!",
                                "subtitle": "We are here for you. We have all been there!",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                                  }
                                },
                                "actionLink": "https://www.goodlives.in/blog/"
                              },
                          {
                            "type": "chips",
                            "options": [
                              {
                                "text": "Talk to an expert",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                                  }
                                }},
                              {
                                "text": "Take a self test!",
                                "image": {
                                  "src": {
                                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                                  }
                                }
                              },
                              {
                                "type": "button",
                                "icon": {
                                  "type": "chevron_right",
                                  "color": "#FF9800"
                                },
                                "text": "Testimonials",
                                "link": "https://www.goodlives.in/testimonials/",
                                "event": {
                                  "name": "",
                                  "languageCode": "",
                                  "parameters": {}
                                }
                              },
                        {
                                "type": "button",
                                "icon": {
                                  "type": "chevron_right",
                                  "color": "#FF9800"
                                },
                                "text": "Chat with us on whatsapp without signing up",
                                "link": "https://api.whatsapp.com/send/?phone=917478530132&text&app_absent=0",
                                "event": {
                                  "name": "",
                                  "languageCode": "",
                                  "parameters": {}
                                }
                              },
                        {
                                "type": "button",
                                "icon": {
                                  "type": "chevron_right",
                                  "color": "#FF9800"
                                },
                                "text": "Our Experts",
                                "link": "https://www.goodlives.in/experts/",
                                "event": {
                                  "name": "",
                                  "languageCode": "",
                                  "parameters": {}
                                }
                              }
                              
                            ]
                          }
                        ]
                      ]
                }
                agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
                }
    function follow(agent){
        var payloadData ={
                
          "richContent": [
            [
            {
                "type": "info",
                "title": "Facebook",
                "subtitle": "",
                "image": {
                  "src": {
                    "rawUrl": "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                  }
                },
                "actionLink": "https://www.facebook.com/Good-Lives-112956657118036/"
              },
            {
                "type": "info",
                "title": "Instagram",
                "subtitle": "",
                "image": {
                  "src": {
                    "rawUrl": "https://i.pinimg.com/736x/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg"
                  }
                },
                "actionLink": "https://www.instagram.com/goodlives.insta/"
              },
              {
                "type": "info",
                "title": "Twitter",
                "subtitle": "",
                "image": {
                  "src": {
                    "rawUrl": "https://image.flaticon.com/icons/png/512/124/124021.png"
                  }
                },
                "actionLink": "https://twitter.com/GoodLives4"
              },
              {
                "type": "chips",
                "options": [
                  {
                    "text": "Our Team",
                    "image": {
                      "src": {
                        "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                      }
                    }},
                  {
                    "text": "Therapies we offer!",
                    "image": {
                      "src": {
                        "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                      }
                    }
                  },
                  {
                    "text": "Types of Therapists",
                    "image": {
                      "src": {
                        "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                      }
                    }
                  }
                ]
            }
         ]
          ]
        }
        agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
        }
        function racb2(agent){
            
            var name = agent.context.get("info").parameters.name;
            var email = agent.context.get("info").parameters.email;
            var phno = agent.context.get("info").parameters.phone;
            var desc = agent.context.get("info").parameters.Anxiety;
      
            console.log(name);
            console.log(email);
            console.log(phno);
            console.log(desc);
      
      
            
      
            agent.add(`Hello ${name}, your email: ${email}, your phone: ${phno}. We will get back to you.`);
      
            return db.collection('Requests').add({
              name : name,
              email : email,
              phone : phno,
              desc : desc
            }).then(ref =>
      
              console.log("Details added to DB")
              )
      
          }
    function st(agent){
        agent.add("Give our quizzes an honest try.");
            var payloadData ={
            
      "richContent": [
        [
          {
            "type": "accordion",
            "title": "Anxiety Test",
            "subtitle": "https://www.goodlives.in/self-test/anxiety-quiz/",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/06/anxious-1024x682.jpg"
              }
            },
            "text": ""
          },
         {
            "type": "accordion",
            "title": "Emotional Intelligence",
            "subtitle": "https://www.goodlives.in/self-test/emotional-intelligence-quiz/",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/06/eq-1024x683.jpg"
              }
            },
            "text": ""
          },
          {
            "type": "accordion",
            "title": "Stress Test",
            "subtitle": "https://www.goodlives.in/self-test/stress-meter/",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/07/stress.jpg"
              }
            },
            "text": ""
          },
          {
            "type": "chips",
            "options": [
              {
                "text": "Know More",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
            },
              {
                "text": "Talk to therapist",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
              },
              {
                "text": "Just Browsing",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
              }
            
            ]
        }
        ]
      ]
    }
     agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
    }
    function two(agent){
        agent.add("Creating a positive impact");
            var payloadData ={
            
      "richContent": [
        [
          {
            "type": "accordion",
            "title": "Cognitive Behavioural Therapy",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/clipart4245423.png"
              }
            },
            "text": "It can help people find new ways to behave by changing their thought patterns. Engaging with CBT can help people reduce stress, cope with complicated relationships, deal with grief, and face many other common life challenges."
          },
         {
            "type": "accordion",
            "title": "Expressive Arts/Writing",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/IMGBIN_paper-painting-drawing-board-png_9PfGWBGd.png"
              }
            },
            "text": "It is a Process of healing and development using imagery, storytelling, dance, music, drama, poetry, movement etc."
          },
          {
            "type": "accordion",
            "title": "Music Therapy",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/NicePng_cute-png_242553.png"
              }
            },
            "text": "It can act as a great outlet for emotions and improve mood, decrease stress, decrease pain, enhance relaxation, and decrease anxiety. It is significant in increasing coping skills."
          },
          {
            "type": "chips",
            "options": [
              {
                "text": "Know More",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
            },
              {
                "text": "Talk to therapist",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
              },
              {
                "text": "Just Browsing",
                "image": {
                  "src": {
                    "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png"
                  }
                }
              }
            
            ]
        }
        ]
      ]
    }
     agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
    }
    function tot(agent){
        agent.add("Psychiatrist, psychologist, psychoanalyst, psychopharmacologist, psychotherapist and counsellor – Thinking about seeing a therapist but confused about all the different titles? The list below attempts to explain the various professions within the mental health industry.");
            var payloadData ={
            
      "richContent": [
        [
          {
            "type": "accordion",
            "title": "Psychologist",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/07/Pngtree_psychiatry_psychology_professional_consultation_vector_5141799__1_-removebg-preview.png"
              }
            },
            "text": "They are professionals specializing in diagnosing and treating diseases of the brain, emotional disturbance, and behaviour problems. They can use various types of therapy as treatment that does not involve medication."
          },
         {
            "type": "accordion",
            "title": "Psychiatrists",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/07/pngguru.com-8-1.png"
              }
            },
            "text": "Psychiatrists have a medical degree along with advanced qualifications from residency and a specialty in psychiatry. You must see a psychiatrist or other medical doctor to be treated with medication."
          },
          {
            "type": "accordion",
            "title": "Counsellor",
            "subtitle": "",
            "image": {
              "src": {
                "rawUrl": "https://www.goodlives.in/wp-content/uploads/2020/07/pngguru.com-6-2048x1306.png"
              }
            },
            "text": "A counsellor is a person who gives advice or counsel, specifically on personal problems or career related issues. They may not be able diagnose mental health problem, but they can help you with your problems based on their experience."
          },
          {
            "type": "button",
            "icon": {
              "type": "chevron_right",
              "color": "#FF9800"
            },
            "text": "Our Experts",
            "link": "https://www.goodlives.in/experts/",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          },
          {
            "type": "button",
            "icon": {
              "type": "chevron_right",
              "color": "#FF9800"
            },
            "text": "Testimonials",
            "link": "https://www.goodlives.in/testimonials/",
            "event": {
              "name": "",
              "languageCode": "",
              "parameters": {}
            }
          }
        ]
      ]
    }
     agent.add( new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage: true, rawPayload: true}))
    }

    var intentMap = new Map();
    intentMap.set('Default Welcome Intent',Welcome)
    intentMap.set('Follow',follow)
    intentMap.set('Know more',Know)
    intentMap.set('Problem',problem)
    intentMap.set('Request a call back - yes',racb2)
    intentMap.set('Self_Test',st)
    intentMap.set('Therapies we offer',two)
    intentMap.set('Types of Therapists',tot)
    intentMap.set('demo',demo)

    agent.handleRequest(intentMap);
});
app.listen(3300, ()=>console.log("Server is live at port 3300"));