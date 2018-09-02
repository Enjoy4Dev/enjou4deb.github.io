
$(document).ready(function () {

    vph = $(window).height() / 100;

if ($(window).width() > 767) {
    $('.nav_bar').scroolly([
        {
            to: 'doc-top + 100vp = vp-top',

            cssFrom: {
                'box-shadow': '0px 0px 17px 4px #0c0c0c54',
            },
            cssTo: {
                'box-shadow': '0px 0px 17px 0px #0c0c0c54',
            },
        },
    ], );







    $('.main_image').scroolly([
        {
            to: 'doc-top + 100vp = vp-top',

            cssFrom: {
                right: '-1vw',
            },
            cssTo: {
                right: '-50vw'
            },
        },
        {
            from: 'doc-top + 100vp = vp-top',
            to: 'doc-bottom',

            css: {
                right: '-100vw'
            },
        },
    ], );


    $('.main_slide_text_block').scroolly([
        {
            to: 'doc-top + 100vp = vp-top',

            cssFrom: {
                top: '-1vh',
            },
            cssTo: {
                top: '-190vh'
            },
        },
        {
            from: 'doc-top + 100vp = vp-top',
            to: 'doc-bottom',

            css: {
                top: '-300vh'
            },
        },
    ], );

    $('.main_bg').scroolly([
        {
            to: 'doc-top + 100vp = vp-top',

            cssFrom: {
                '-webkit-mask-position': '-1vw -1vh',
                '-webkit-mask-size': '102%',
                opacity: '0.99',

            },
            cssTo: {
                '-webkit-mask-position': '-200vw -250vh',
                '-webkit-mask-size': '400%',
                opacity: '0.08',
            },
        }
        , {
            from: 'doc-top + 100vp = vp-top',
            to: 'doc-top + 240vp = vp-bottom',
            css: {
                '-webkit-mask-position': '-200vw -250vh',
                '-webkit-mask-size': '400%',
            },
            cssFrom: {
                opacity: '0.08',

            },
            cssTo: {
                opacity: '0.01',
            },
        }
        , {
            from: 'doc-top + 240vp = vp-bottom',
            to: 'doc-bottom',
            css: {
                '-webkit-mask-position': '-200vw -250vh',
                '-webkit-mask-size': '400%',
            }
        },


    ], );




    $('.sub_bg').scroolly([
        {
            to: 'doc-top + 100vp = vp-top',

            cssFrom: {
                '-webkit-mask-position': '-1vw -1vh',
                '-webkit-mask-size': '102%',

            },
            cssTo: {
                '-webkit-mask-position': '-200vw -250vh',
                '-webkit-mask-size': '400%',
            },
        },

        {
            from: 'doc-top + 100vp = vp-top',
            to: 'doc-bottom',
            css: {
                '-webkit-mask-position': '-200vw -250vh',
                '-webkit-mask-size': '400%',
            },
        },

    ], );

    $('.main_slide').scroolly([

        {
            from: 'doc-top',
            to: 'doc-top + 40vp = vp-top',
            css: {
                'z-index': '2',
                display: 'block',
                position: 'fixed'

            }
        },
        {
            from: 'doc-top + 40vp = vp-top',
            to: 'doc-top + 100vp = vp-top',
            css: {
                'z-index': '-1',
                display: 'block',
                position: 'fixed'

            }
        },
        {
            from: 'doc-top + 100vp = vp-top',
            to: 'doc-top + 240vp = vp-bottom',
            css: {
                'z-index': '-1',
                display: 'block',
                position: 'fixed'

            }
        },
        {
            from: 'doc-top + 240vp = vp-bottom',
            to: 'doc-bottom',
            css: {
                display: 'none',
                position: 'relative'
            }
        },
        // {
        //     from: 'doc-bottom = vp-bottom',
        //     css: {
        //         display: 'none',
        //         position: 'relative'
        //     }
        // },
    ], );










    $('.advantages_image_1').scroolly([
        {
            to: 'el-bottom = vp-bottom',
            css: {
                // '-webkit-mask-position-y': '-110vh',

                // 'background-position-y' : '18vh',
                'background-attachment': 'fixed',

            }
        },
        // {
        //     from: 'con-top = vp-bottom',
        //     to: 'con-top = vp-top',
        //     css: {
        //         'background-attachment': 'fixed',
        //     },
        //     cssFrom: {
        //         '-webkit-mask-position-y': '-110vh'
        //     },
        //     cssTo: {
        //         '-webkit-mask-position-y': '-10vh'
        //     },
        // },
        {
            from: 'el-bottom = vp-bottom',
            css: {
                // '-webkit-mask-position:': '-110vh',
                // 'background-position-y' : '-32vh',
                'background-attachment': 'initial',
            }
        }
    ], $('.advantages_container'));

    $('.advantages_text_1').scroolly([
        {
            to: 'con-top= vp-bottom',
            css: {
                top: '1vh',
                // color: '#ff0'
            }
        },
        {
            from: 'con-top= vp-bottom',
            to: 'con-bottom = vp-bottom',
            cssFrom: {
                top: '1vh',
                // right : '10vw'
                // color: '#000'
            },
            cssTo: {
                top: '24vh',
                // color: '#ff0'
                // right : '13vw'
            }
        },
        {
            from: 'con-bottom = vp-bottom',
            css: {
                top: '24vh',
                // color: '#0600ff'
            }
        }
    ], $('.advantages_image_1'));


    $('.advantages_text_2').scroolly([
        {
            to: 'el-center = vp-bottom',
            css: {
                left: '-50vw',
            }
        },
        {
            from: 'el-center = vp-bottom',
            to: 'doc-bottom',
            css: {
                left: '15vw',

            }
        },], );
    $('.advantages_text_3').scroolly([
        {
            to: 'el-top - 37vp = vp-center',
            css: {
                right: '-50vw',
            }
        },
        {
            from: 'el-top - 37vp = vp-center',
            to: 'doc-bottom',
            css: {
                right: '13vw',

            }
        },], );
    $('.advantages_text_4').scroolly([
        {
            to: 'el-top - 37vp = vp-center',
            css: {
                left: '-50vw',
            }
        },
        {
            from: 'el-top - 37vp = vp-center',
            to: 'doc-bottom',
            css: {
                left: '7vw',

            }
        },], );


    $('.advantages_text_5').scroolly([
        {
            to: 'el-top - 37vp = vp-center',
            css: {
                right: '-50vw',
            }
        },
        {
            from: 'el-top - 37vp = vp-center',
            to: 'doc-bottom',
            css: {
                right: '15vw',

            }
        },], );


    $('#map').scroolly([
        {
            to: 'el-top + 10vp = vp-bottom',
            css: {
                '-webkit-mask-position-x': '100vw',
            }
        },
        {
            from: 'el-top + 10vp = vp-bottom',
            to: 'doc-bottom',
            css: {
                '-webkit-mask-position-x': '-20vw',

            }
        },], );







}


// MOBILE


if ($(window).width() <= 767) {
    $('.advantages_image_1').scroolly([
        {
            to: 'con-top = vp-top',
            css: {
                'position': 'absolute',
                'top': "0",
                'z-index': "1",
            }
        },
        {
            from: 'con-top = vp-top',
            to: 'con-top + ' + 950 * vph + ' = vp-top',
            css: {
                'position': 'fixed',
                'top': '0vh',
            }
        },
        {
            from: 'doc-top',
            to: 'con-top + ' + 170 * vph + ' = vp-top',
            css: {
                'background-image': 'url(images/advantages_image_1_cr.jpg)',
            }
        },
        {
            from: 'con-top + ' + 125 * vph + ' = vp-top',
            to: 'con-top + ' + 170 * vph + ' = vp-top',
            // css: {
            //     'background-image': 'url(images/advantages_image_1_cr.jpg)',
            // },
            cssFrom: {
                'opacity': "0.999",
            },
            cssTo: {
                'opacity': "0.001",
            },
        },


        // 2
        {
            from: 'con-top + ' + 180 * vph + ' = vp-top',
            to: 'con-top + ' + 370 * vph + ' = vp-top',
            css: {
                'background-image': 'url(images/advantages_image_2.jpeg)',
            }
        },
        {
            from: 'con-top + ' + 180 * vph + ' = vp-top',
            to: 'con-top + ' + 225 * vph + ' = vp-top',
            css: {
                // 'background-image': 'url(images/advantages_image_2.jpeg)',
            },
            cssFrom: {
                'opacity': "0.001",
            },
            cssTo: {
                'opacity': "0.999",
            },
        },
        {
            from: 'con-top + ' + 325 * vph + ' = vp-top',
            to: 'con-top + ' + 370 * vph + ' = vp-top',
            css: {
                // 'background-image': 'url(images/advantages_image_2.jpeg)',
            },
            cssFrom: {
                'opacity': "0.999",
            },
            cssTo: {
                'opacity': "0.001",
            },
        },

        // 3

        {
            from: 'con-top + ' + 380 * vph + ' = vp-top',
            to: 'con-top + ' + 570 * vph + ' = vp-top',
            css: {
                'background-image': 'url(images/advantages_image_3.jpg)',
            }
        },
        {
            from: 'con-top + ' + 380 * vph + ' = vp-top',
            to: 'con-top + ' + 425 * vph + ' = vp-top',
            css: {
                // 'background-image': 'url(../images/advantages_image_3.jpg)',
            },
            cssFrom: {
                'opacity': "0.001",
            },
            cssTo: {
                'opacity': "0.999",
            },
        },
        {
            from: 'con-top + ' + 525 * vph + ' = vp-top',
            to: 'con-top + ' + 570 * vph + ' = vp-top',
            cssFrom: {
                'opacity': "0.999",
            },
            cssTo: {
                'opacity': "0.001",
            },
        },

        // 4

        {
            from: 'con-top + ' + 580 * vph + ' = vp-top',
            to: 'con-top + ' + 770 * vph + ' = vp-top',
            css: {
                'background-image': 'url(images/advantages_image_4.jpg)',
            }
        },
        {
            from: 'con-top + ' + 580 * vph + ' = vp-top',
            to: 'con-top + ' + 625 * vph + ' = vp-top',
            cssFrom: {
                'opacity': "0.001",
            },
            cssTo: {
                'opacity': "0.999",
            },
        },
        {
            from: 'con-top + ' + 725 * vph + ' = vp-top',
            to: 'con-top + ' + 770 * vph + ' = vp-top',
            cssFrom: {
                'opacity': "0.999",
            },
            cssTo: {
                'opacity': "0.001",
            },
        },

        // 5

        {
            from: 'con-top + ' + 780 * vph + ' = vp-top',
            to: 'con-bottom = vp-top',
            css: {
                'background-image': 'url(images/advantages_image_5.jpg)',
            }
        },
        {
            from: 'con-top + ' + 780 * vph + ' = vp-top',
            to: 'con-top + ' + 825 * vph + ' = vp-top',
            cssFrom: {
                'opacity': "0.001",
            },
            cssTo: {
                'opacity': "0.999",
            },
        },
        {
            from: 'con-top + ' + 950 * vph + ' = vp-top',
            to: 'con-bottom = vp-top',
            css: {
                'position': "absolute",
                'top': 950 * vph,
            }
        },
    ], $('.advantages_container'));

    $('.advantages_container').css('height', 1050 * vph)

    $('#map').scroolly([
        {
            to: 'el-top + 10vp = vp-bottom',
            css: {
                '-webkit-mask-position-x': '100vw',
            }
        },
        {
            from: 'el-top + 10vp = vp-bottom',
            to: 'doc-bottom',
            css: {
                '-webkit-mask-position-x': '-40vw',

            }
        },], );

}
// $('.advantages_image_1').scroolly([
//     {
//         to: 'con-top = vp-top',
//         css: {
//             'position': 'absolute',
//             'top': "0",
//             'z-index': "1"

//         }
//     },
//     {
//         from: 'con-top = vp-top',
//         to: 'con-top + 100vp = vp-top',
//         css: {
//             'position': 'fixed',
//             'top': "0",
//             // 'z-index': "20"
//         }
//     },
//     {
//         from: 'con-top + 100vp = vp-top',
//         to: 'con-bottom  = vp-bottom',
//         css: {
//             'position': 'absolute',
//             'top': "100vh",
//             'z-index': "1"
//         }
//     },
// ], $('.advantages_container'));

// $('.advantages_image_2').scroolly([
//     {
//         to: 'con-top + 200vp = vp-top',
//         css: {
//             'position': 'absolute',
//             'top': "200vh",
//             'z-index': "1"

//         }
//     },
//     {
//         from: 'con-top + 200vp = vp-top',
//         to: 'con-top + 300vp = vp-top',
//         css: {
//             'position': 'fixed',
//             'top': "0",
//             // 'z-index': "20"
//         }
//     },
//     {
//         from: 'con-top + 300vp = vp-top',
//         to: 'con-bottom  = vp-bottom',
//         css: {
//             'position': 'absolute',
//             'top': "300vh",
//             'z-index': "1"
//         }
//     },
// ], $('.advantages_container'));

// $('.advantages_image_3').scroolly([
//     {
//         to: 'con-top + 400vp = vp-top',
//         css: {
//             'position': 'absolute',
//             'top': "400vh",
//             'z-index': "1"

//         }
//     },
//     {
//         from: 'con-top + 400vp = vp-top',
//         to: 'con-top + 500vp = vp-top',
//         css: {
//             'position': 'fixed',
//             'top': "0",
//             // 'z-index': "20"
//         }
//     },
//     {
//         from: 'con-top + 500vp = vp-top',
//         to: 'con-bottom  = vp-bottom',
//         css: {
//             'position': 'absolute',
//             'top': "500vh",
//             'z-index': "1"
//         }
//     },
// ], $('.advantages_container'));

// $('.advantages_image_4').scroolly([
//     {
//         to: 'con-top + 600vp = vp-top',
//         css: {
//             'position': 'absolute',
//             'top': "600vh",
//             'z-index': "1"

//         }
//     },
//     {
//         from: 'con-top + 600vp = vp-top',
//         to: 'con-top + 700vp = vp-top',
//         css: {
//             'position': 'fixed',
//             'top': "0",
//             // // 'z-index': "20"
//         }
//     },
//     {
//         from: 'con-top + 700vp = vp-top',
//         to: 'con-bottom  = vp-bottom',
//         css: {
//             'position': 'absolute',
//             'top': "700vh",
//             'z-index': "1"
//         }
//     },
// ], $('.advantages_container'));

// $('.advantages_image_5').scroolly([
//     {
//         to: 'con-top + 800vp = vp-top',
//         css: {
//             'position': 'absolute',
//             'top': "800vh",
//             'z-index': "1"

//         }
//     },
//     {
//         from: 'con-top + 800vp = vp-top',
//         to: 'con-top + 900vp = vp-top',
//         css: {
//             'position': 'fixed',
//             'top': "0",
//             // 'z-index': "20"
//         }
//     },
//     {
//         from: 'con-bottom = vp-bottom',
//         to: 'doc-bottom',
//         css: {
//             'position': 'absolute',
//             'top': "900vh",
//             'z-index': "1"
//         }
//     },
// ], $('.advantages_container'));


// TEEEEEEEEEEEXT

// $('.advantages_text_1').scroolly([
//     {
//         to: 'con-top - 10vp = vp-top',
//         css: {
//             'top': "100vp",
//             'position': 'fixed',
//             'background' : '#fff',
//         }
//     },
//     {
//         from: 'con-top - 10vp = vp-top',
//         to: 'con-top + 10vp = vp-top',
//         cssFrom: {
//             'top': "100vh",
//             'position': 'fixed',
//             'background' : '#000',
//         },
//         cssTo: {
//             'top': "40vh",
//             'position': 'fixed',
//             'background' : '#000',
//         },
//     },
//     {
//         from: 'con-top + 10vp = vp-top',
//         to: 'con-top + 70vp = vp-top',
//         cssFrom: {
//             'top': "40vh",
//             'position': 'fixed',
//             'background' : '#237288',
//         },
//         cssTo: {
//             'top': "20vh",
//             'position': 'fixed',
//             'background' : '#237288',
//         },
//     },
//     {
//         from: 'con-top + 70vp = vp-top',
//         to: 'con-top + 80vp = vp-top',
//         cssFrom: {
//             'top': "20vh",
//             'position': 'fixed',
//             'background' : '#986532',
//         },
//         cssTo: {
//             'top': "0vh",
//             'position': 'fixed',
//             'background' : '#986532',
//         },
//     },
//     {
//         from: 'con-top + 80vp = vp-top',
//         to: 'con-top + 100vp = vp-top',
//         cssFrom: {
//             'top': "-1vh",
//             'position': 'fixed',
//             'background' : '#fff',
//         },
//         cssTo: {
//             'top': "-100vh",
//             'position': 'fixed',
//             'background' : '#fff',
//         },
//     },
// ], $('.advantages_container'));



// $('.advantages_text_2').scroolly([
//     {
//         to: 'con-top + 180vp = vp-top',
//         css: {
//             'top': "100vh",
//             'position': 'fixed',
//         }
//     },
//     {
//         from: 'con-top + 180vp = vp-top',
//         to: 'con-top + 220vp = vp-top',
//         cssFrom: {
//             'top': "100vh",
//             'position': 'fixed',
//         },
//         cssTo: {
//             'top': "50vh",
//             'position': 'fixed',
//         },
//     },
//     {
//         from: 'con-top + 220vp = vp-top',
//         to: 'con-top + 280vp = vp-top',
//         cssFrom: {
//             'top': "50vh",
//             'position': 'fixed',
//         },
//         cssTo: {
//             'top': "10vh",
//             'position': 'fixed',
//         },
//     },
//     {
//         from: 'con-top + 280vp = vp-top',
//         to: 'con-top + 290vp = vp-top',
//         cssFrom: {
//             'top': "10vh",
//             'position': 'fixed',
//         },
//         cssTo: {
//             'top': "0vh",
//             'position': 'fixed',
//         },
//     },
//     {
//         from: 'con-top + 300vp = vp-top',
//         to: 'con-top + 350vp = vp-top',
//         cssFrom: {
//             'top': "-1vh",
//             'position': 'fixed',
//         },
//         cssTo: {
//             'top': "-100vh",
//             'position': 'fixed',
//         },
//     },
// ], $('.advantages_container'));
    // {
    //     from: 'con-top + 80vp = vp-top',
    //     to: 'con-top + 90vp = vp-top',
    //     cssFrom: {
    //         'top': "10vh",
    //         'position': 'fixed',
    //     },
    //     cssTo: {
    //         'top': "0vh",
    //         'position': 'fixed',
    //     },
    // },
    // {
    //     from: 'con-top + 100vp = vp-top',
    //     to: 'con-top + 150vp = vp-top',
    //     cssFrom: {
    //         'top': "-1vh",
    //         'position': 'fixed',
    //     },
    //     cssTo: {
    //         'top': "-100vh",
    //         'position': 'fixed',
    //     },
    // },
// ], $('.advantages_container'));



// if ($(window).width() < 767) {
    // $('.advantages_image_1').scroolly([
    //     {
    //         from: 'doc-top = vp-top',
    //         to: 'con-top  = vp-top',
    //         css: {
    //             'position': 'absolute',
    //             'z-index': '1',
    //             'top': '0',
    //         }
    //     },
    //     {
    //         from: 'con-top  = vp-top',
    //         to: 'con-top + 500vh = vp-bottom',
    //         css: {
    //             'position': 'fixed',
    //             'z-index': '30000',
    //             'top': '0',
    //         }
    //     },
    //     // {
    //     //     from: 'con-top + 300vh = vp-bottom',
    //     //     to: 'doc-bottom',
    //     //     css: {
    //     //         'top': '300vh',
    //     //         'position': 'absolute',
    //     //         'z-index': '0',
    //     //     }
    //     // },
    //     // {
    //     //     from: 'con-top= vp-bottom',
    //     //     to: 'con-bottom = vp-bottom',
    //     //     cssFrom: {
    //     //         top: '1vh',
    //     //         // right : '10vw'
    //     //         // color: '#000'
    //     //     },
    //     //     cssTo: {
    //     //         top: '24vh',
    //     //         // color: '#ff0'
    //     //         // right : '13vw'
    //     //     }
    //     // },
    //     // {
    //     //     from: 'con-bottom = vp-bottom',
    //     //     css: {
    //     //         top: '24vh',
    //     //         // color: '#0600ff'
    //     //     }
    //     // }
    // ], $('#advantages'));
// }


});