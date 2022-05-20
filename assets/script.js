Vue.createApp({
    data() {
      return {
        sliderValue:1,
        width:1,
        active: 0,
        categories: [
			"Snacky", 
			"Hungry", 
			"Starving",
		],
        crewNumber:0,
		numberOfTabs:[
			{number:0,content:'hello'},
			{number:1,content:'hello two'},
			{number:2,content:'hello three'},
		],
        wingsSnacky:[
            {
                content:[
                    { title:'SMALL 6 PC WING COMBO',
                    content:'6 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1 dip and a 20oz drink',
                    image:'./assets/image/mealimages/SMALL 6 PC WING COMBO.avif'},
                    { 
                    title:'10 WINGS',
                    content:'10 Boneless or Classic (Bone-In) wings with up to 2 flavors. (Dip not included)',
                    image:'./assets/image/mealimages/10 WINGS.avif'}
                ] 
            },
            {
             content:[
                    { 
                    title:'15PC MEAL FOR 2',
                    content:'15 Boneless or Classic (Bone-In) wings with up to 2 flavors, large fries or veggie sticks, 2 dips and 2 20oz drinks',
                    image:'./assets/image/mealimages/15PC MEAL FOR 2.avif'
                    },
                    { 
                    title:'15 WINGS',
                    content:'15 Boneless or Classic (Bone-In) wings with up to 2 flavors. (Dips not included)',
                    image:'./assets/image/mealimages/15 WINGS.avif'
                    },
                    { 
                    title:'THIGH BITES MEAL FOR 2',
                    content:'2 regular orders of juicy, breaded, bite-sized boneless chicken in your choice of 2 flavors, large fries, 2 dips and 2 20oz drinks',
                    image:'./assets/image/mealimages/THIGH BITES MEAL FOR 2.avif'
                    }
                ]  
            },
            {
                content:[
                       { 
                       title:'20 WINGS',
                       content:'20 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/20 WINGS.avif'
                       },
                     
                   ]  
            },
            {
                content:[
                       { 
                       title:'30PC CREW PACK',
                       content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors, large fries, veggie sticks and 3 dips. (Feeds 4-5)',
                       image:'./assets/image/mealimages/30PC CREW PACK.avif'
                       },
                       { 
                        title:'30 WINGS',
                        content:'30 WINGS 30 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/30 WINGS.avif'
                        },
                     
                   ]  
            },
            {
                content:[
                    { 
                        title:'30PC CREW PACK',
                        content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors, large fries, veggie sticks and 3 dips. (Feeds 4-5)',
                        image:'./assets/image/mealimages/30PC CREW PACK.avif'
                        },
                        { 
                         title:'30 WINGS',
                         content:'30 WINGS 30 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                         image:'./assets/image/mealimages/30 WINGS.avif'
                         },
                        { 
                            title:'CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK',
                            content:'2 large orders of Thigh Bites (juicy, breaded, bite-sized boneless chicken) in your choice of 2 flavors and 10 Classic wings in your choice of flavor, 2 large fries and 3 dips. (Feeds 3-5)',
                            image:'./assets/image/mealimages/CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK.avif'
                        },
                        { 
                             title:'THIGH BITES GROUP PACK',
                             content:'3 regular orders of juicy, breaded, bite-sized boneless chicken in your choice of 3 flavors, 2 large fries, and 3 dips. (Feeds 3-4)',
                             image:'./assets/image/mealimages/THIGH BITES GROUP PACK.avif'
                        },
                     
                   ]  
            },
            {
                content:[
                    { 
                        title:'40PC GROUP PACK',
                        content:'40 Boneless or Classic (Bone-In) wings with up to 4 flavors, large fries, 2 veggie sticks and 4 dips. (Feeds 5-6)',
                        image:'./assets/image/mealimages/40PC GROUP PACK.avif'
                        },

                   ]  
            },
            {
                content:[
                        { 
                            title:'50PC PARTY PACK',
                            content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors, 2 large fries, 2 veggie sticks and 4 dips. (Feeds 6-9)',
                            image:'./assets/image/mealimages/50PC PARTY PACK.avif'
                        },
                        { 
                            title:'50 WINGS',
                            content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors. (Dips not included)',
                            image:'./assets/image/mealimages/50 WINGS.avif'
                        },
                   ]  
            },
            {
                content:[
                    { 
                        title:'50PC PARTY PACK',
                        content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors, 2 large fries, 2 veggie sticks and 4 dips. (Feeds 6-9)',
                        image:'./assets/image/mealimages/50PC PARTY PACK.avif'
                    },
                    { 
                        title:'50 WINGS',
                        content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/50 WINGS.avif'
                    },
                   ]  
            },
            {
                content:[
                    { 
                        title:'75PC PACK',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                        image:'./assets/image/mealimages/75PC PACK.avif'
                        },
                        { 
                            title:'75 WINGS',
                            content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                            image:'./assets/image/mealimages/75 WINGS.avif'
                            },
                   ]  
            },
            {
                content:[
                    { 
                        title:'75PC PACK',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                        image:'./assets/image/mealimages/75PC PACK.avif'
                        },
                        { 
                            title:'75 WINGS',
                            content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                            image:'./assets/image/mealimages/75 WINGS.avif'
                            },
                   ]  
            },
            {
                content:[
                        { 
                            title:'75PC PACK',
                            content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                            image:'./assets/image/mealimages/75PC PACK.avif'
                        },
                        { 
                            title:'75 WINGS',
                            content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                            image:'./assets/image/mealimages/75 WINGS.avif'
                        },
                   ]  
            },
            {
                content:[
                    { 
                        title:'75PC PACK',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                        image:'./assets/image/mealimages/75PC PACK.avif'
                    },
                    { 
                        title:'75 WINGS',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/75 WINGS.avif'
                    },
                   ]  
            },
            {
                content:[
                        { 
                            title:'100PC PACK',
                            content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                            image:'./assets/image/mealimages/100PC PACK.avif'
                        },
                        { 
                            title:'100 WINGS',
                            content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                            image:'./assets/image/mealimages/100 WINGS.avif'
                        },
                   ]  
            },
            {
             content:[
                    { 
                        title:'100PC PACK',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                        image:'./assets/image/mealimages/100PC PACK.avif'
                    },
                    { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                    },
                   ]  
            },
            {
                content:[
                    { 
                        title:'100PC PACK',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                        image:'./assets/image/mealimages/100PC PACK.avif'
                    },
                    { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                    },
                   ]  
            },
            {
                content:[
                    { 
                        title:'100PC PACK',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                        image:'./assets/image/mealimages/100PC PACK.avif'
                    },
                    { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                    },
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },   
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },   
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },   
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
        ],
        wingsHungry:[
            {
                  content:[
                      { title:'MEDIUM 8 PC WING COMBO',
                      content:'8 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1 dip and a 20oz drink',
                      image:'./assets/image/mealimages/MEDIUM 8 PC WING COMBO.avif'},
                      { 
                        title:'10 WINGS',
                        content:'10 Boneless or Classic (Bone-In) wings with up to 2 flavors. (Dip not included)',
                        image:'./assets/image/mealimages/10 WINGS.avif'
                    }
                  ] 
              },
              {
               content:[
                      { 
                      title:'15PC MEAL FOR 2',
                      content:'15 Boneless or Classic (Bone-In) wings with up to 2 flavors, large fries or veggie sticks, 2 dips and 2 20oz drinks',
                      image:'./assets/image/mealimages/15PC MEAL FOR 2.avif'
                      },
                      { 
                      title:'15 WINGS',
                      content:'15 Boneless or Classic (Bone-In) wings with up to 2 flavors. (Dips not included)',
                      image:'./assets/image/mealimages/15 WINGS.avif'
                      },
                   
                  ]  
              },
              {
                content:[
                       { 
                       title:'30PC CREW PACK',
                       content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors, large fries, veggie sticks and 3 dips. (Feeds 4-5)',
                       image:'./assets/image/mealimages/30PC CREW PACK.avif'
                       },
                       { 
                       title:'30 WINGS',
                       content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/15 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'40PC GROUP PACK',
                       content:'40 Boneless or Classic (Bone-In) wings with up to 4 flavors, large fries, 2 veggie sticks and 4 dips. (Feeds 5-6)',
                       image:'./assets/image/mealimages/40PC GROUP PACK.avif'
                       },
                       { 
                       title:'CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK',
                       content:'2 large orders of Thigh Bites (juicy, breaded, bite-sized boneless chicken) in your choice of 2 flavors and 10 Classic wings in your choice of flavor, 2 large fries and 3 dips. (Feeds 3-5)',
                       image:'./assets/image/mealimages/CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK.avif'
                       },
                       { 
                        title:'THIGH BITES GROUP PACK',
                        content:'3 regular orders of juicy, breaded, bite-sized boneless chicken in your choice of 3 flavors, 2 large fries, and 3 dips. (Feeds 3-4)',
                        image:'./assets/image/mealimages/CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK.avif'
                        },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'40PC GROUP PACK',
                       content:'40 Boneless or Classic (Bone-In) wings with up to 4 flavors, large fries, 2 veggie sticks and 4 dips. (Feeds 5-6)',
                       image:'./assets/image/mealimages/40PC GROUP PACK.avif'
                       },
                     
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'50PC PARTY PACK',
                       content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors, 2 large fries, 2 veggie sticks and 4 dips. (Feeds 6-9)',
                       image:'./assets/image/mealimages/50PC PARTY PACK.avif'
                       },
                       { 
                       title:'50 WINGS',
                       content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/50 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'75PC PARTY PACK',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                       image:'./assets/image/mealimages/75PC PACK.avif'
                       },
                       { 
                       title:'75 WINGS',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/75 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'75PC PARTY PACK',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                       image:'./assets/image/mealimages/75PC PACK.avif'
                       },
                       { 
                       title:'75 WINGS',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/75 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'75PC PARTY PACK',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                       image:'./assets/image/mealimages/75PC PACK.avif'
                       },
                       { 
                       title:'75 WINGS',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/75 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PARTY PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       },
                       { 
                       title:'100 WINGS',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/100 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PARTY PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       },
                       { 
                       title:'100 WINGS',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/100 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PARTY PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       },
                       { 
                       title:'100 WINGS',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                       image:'./assets/image/mealimages/100 WINGS.avif'
                       },
                    
                   ]  
               },
               {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
               
        ],
        wingsStarving:[
            {
                  content:[
                      { title:'LARGE 10 PC WING COMBO',
                      content:'10 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries or veggie sticks, 1 dip and a 20oz drink',
                      image:'./assets/image/mealimages/LARGE 10 PC WING COMBO.avif'},
                      { 
                      title:'15PC MEAL FOR 2',
                      content:'15 Boneless or Classic (Bone-In) wings with up to 2 flavors, large fries or veggie sticks, 2 dips and 2 20oz drinks',
                      image:'./assets/image/mealimages/15PC MEAL FOR 2.avif'}
                  ] 
              },
              {
               content:[
                      { 
                      title:'20 WINGS',
                      content:'20 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                      image:'./assets/image/mealimages/20 WINGS.avif'
                      },
                     
                  ]  
              },
              {
                content:[
                       { 
                       title:'30PC CREW PACK',
                       content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors, large fries, veggie sticks and 3 dips. (Feeds 4-5)',
                       image:'./assets/image/mealimages/30PC CREW PACK.avif'
                       },
                       { 
                        title:'30 WINGS',
                        content:'30 Boneless or Classic (Bone-In) wings with up to 3 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/30 WINGS.avif'
                        },
                        { 
                            title:'CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK',
                            content:'2 large orders of Thigh Bites (juicy, breaded, bite-sized boneless chicken) in your choice of 2 flavors and 10 Classic wings in your choice of flavor, 2 large fries and 3 dips. (Feeds 3-5)',
                            image:'./assets/image/mealimages/CLASSIC WINGS AND LARGE THIGH BITES GROUP PACK.avif'
                        },
                        { 
                            title:'THIGH BITES GROUP PACK',
                            content:'3 regular orders of juicy, breaded, bite-sized boneless chicken in your choice of 3 flavors, 2 large fries, and 3 dips. (Feeds 3-4)',
                            image:'./assets/image/mealimages/THIGH BITES GROUP PACK.avif'
                        },
                        
                      
                   ]  
               },
               {
                content:[
                       { 
                       title:'40PC GROUP PACK',
                       content:'40 Boneless or Classic (Bone-In) wings with up to 4 flavors, large fries, 2 veggie sticks and 4 dips. (Feeds 5-6)',
                       image:'./assets/image/mealimages/40PC GROUP PACK.avif'
                       }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'50PC PARTY PACK',
                       content:'50 Boneless or Classic (Bone-In) wings with up to 4 flavors, 2 large fries, 2 veggie sticks and 4 dips. (Feeds 6-9)',
                       image:'./assets/image/mealimages/50PC PARTY PACK.avif'
                       }, 
                       { 
                        title:'50PC PARTY PACK',
                        content:'50 WINGS 50 Boneless or Classic (Bone-In) wings with up to 4 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/50 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'75PC PACK',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                       image:'./assets/image/mealimages/75PC PACK.avif'
                       }, 
                       { 
                        title:'75 WINGS',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/75 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'75PC PACK',
                       content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors, 3 large fries, 3 veggie sticks and 6 dips. (Feeds 9-13)',
                       image:'./assets/image/mealimages/75PC PACK.avif'
                       }, 
                       { 
                        title:'75 WINGS',
                        content:'75 Boneless or Classic (Bone-In) wings with up to 5 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/75 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       }, 
                       { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       }, 
                       { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                       { 
                       title:'100PC PACK',
                       content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors, 4 large fries, 4 veggie sticks and 8 dips. (Feeds 13+)',
                       image:'./assets/image/mealimages/100PC PACK.avif'
                       }, 
                       { 
                        title:'100 WINGS',
                        content:'100 Boneless or Classic (Bone-In) wings with up to 6 flavors. (Dips not included)',
                        image:'./assets/image/mealimages/100 WINGS.avif'
                        }, 
                   ]  
               },
               {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
            {
                content:[
                    { 
                        title:'PLEASE CALL SO ONE OF OUR WING EXPERTS CAN HELP!',
                        content:'',
                        image:''
                        },  
                   ]  
            },
        ]
      }
    },
    methods:{
        activate(index) {
			console.log(index)
			this.active = index;
         

		},
        changeWidth(){
            this.width = this.sliderValue
            this.crewNumber = this.sliderValue - 1
        },
        increaseOne(){
            if(this.sliderValue !== 20){
                this.sliderValue++
                this.width++
                this.crewNumber = this.sliderValue - 1
            }
        },
        decreaseOne(){
            if(this.sliderValue !== 1){
                this.sliderValue--
                this.width--
                this.crewNumber = this.sliderValue - 1
            }
        }
    }
  }).mount('#app')