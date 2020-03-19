angular.module('homeController', ['authServices'])


.controller('homeController', function(Auth, $location) {
    var app = this;
	
	var geojson = [
    {
      "type": "Feature",
      "properties": {
        "code": "AAF",
        "name": "Academic Advisement - Farrior Hall",
        "address": "100 Fletcher Dr, Gainesville, FL 32611, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": 'https://floridagators.com/images/2016/6/25/160625_HawkinsCenter_0338_TimCasey.jpg?width=1024&height=576&mode=crop',
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
      }
        },
      "geometry": {
        "coordinates": [
          -82.34563860000002,
        29.6502323
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "AND",
        "name": "Anderson Hall",
        "address": "1507 W University Ave, Gainesville, FL 32611, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Gville_UF_Anderson02.jpg/1024px-Gville_UF_Anderson02.jpg',
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
      }
      },
      "geometry": {
        "coordinates": [
          -82.3418895,
        29.651568
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ANS",
        "name": "Animal Science",
	"address": "Gainesville, FL 32608, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://i.ibb.co/Cvp22SZ/Screen-Shot-2018-12-01-at-12-11-38-AM.png",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
	}
      },
      "geometry": {
        "coordinates": [
          -82.351627,
	 29.631197
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ARB",
        "name": "Academic Research - Health Sciences Center",
	"address": "1600 SW Archer Rd, Gainesville, FL 32610, United State",
        "indoors": "Indoor",
        "quietSpot" : "Quiet Spot",
	"image": "https://pkmngotrading.com/mediawiki/images/thumb/9/90/UF_Health_Science_Center_Library_-_Gainesville%2C_FL.jpg/350px-UF_Health_Science_Center_Library_-_Gainesville%2C_FL.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
           -82.343777,
	  29.6399441
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ARCH",
        "name": "Architecture",
	"address": "1389 Stadium Rd, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnBo8bgp8SGH1OPfalXjOmoM5_lahUhaxO9obgb6z69sbtWPYkg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
           -82.3403431,
	  29.6477756
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ASF",
        "name": "Elmore Hall",
	"address": "Elmore Hall for Administrative Services, Gainesville, FL 32607, USA",
        "indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "http://web.uflib.ufl.edu/ufarch/elmore.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
            -82.3661789,
	   29.6434801
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "AUD",
        "name": "University Auditorium",
	"address": "333 Newell Dr, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
        "image": "http://iml.jou.ufl.edu/projects/Spring04/Wallace/UMA3.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
             -82.3428428,
	    29.649026
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BAR",
        "name": "Bartram Hall",
	"address": "Bartram Hall, Gainesville, FL 32603, USA",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": "http://web.uflib.ufl.edu/ufarch/bartram2.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.34440939999999,
	  29.6439198
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BEC",
        "name": "Beaty Commons",
	"address": "Gainesville, FL 32603, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": "https://bloximages.chicago2.vip.townnews.com/alligator.org/content/tncms/assets/v3/editorial/e/fd/efd3d2b6-57a5-11e1-986a-0019bb2963f4/4f3b5d6845be4.image.jpg?resize=400%2C271",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3404853,
	  29.6441511
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BEN",
        "name": "Benton Hall",
	"adress": "Gainesville, FL 32603, United States",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://upload.wikimedia.org/wikipedia/commons/2/21/UF_BentonHall.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3549302,
	 29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BGH",
        "name": "Bruton-Geer Hall",
	"address": "Bruton-Geer Hall, Gainesville, FL 32603, United States",
        "indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "http://web.uflib.ufl.edu/ufarch/brutongeer2.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3590286,
	 29.6492321
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BLK",
        "name": "Black Hall - Environmental Science",
	"address": "365 Weil Hall, Gainesville, FL 32611, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": "http://web.uflib.ufl.edu/ufarch/black.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3484143,
	 29.6484088
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BME",
        "name": "Broad Biomedical Engineering Building",
	"adress": "919 N Broad St, Brooksville, FL 34601, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        "image": "http://3o15h033zmpwracwx2i00rqx.wpengine.netdna-cdn.com/wp-content/uploads/2018/08/uf-health-jacksonville-trauma.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3775697,
	 28.5663939
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BMS",
        "name": "Biomedical Sciences",
	"address": "1275 Center Dr, Gainesville, FL 32611, United State",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "http://www.whiting-turner.com/portfolio/industry/highered/11050/images/0009.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3455827,
	 29.6406329
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BRO",
        "name": "Broward Hall",
	"address": "Broward Hall, 680 Broward Dr, Gainesville, FL 32603, USA",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "http://web.uflib.ufl.edu/ufarch/broward2.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3420708,
	 29.6465352
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BRT",
        "name": "Bryant Space Science Center",
	"address": "Gainesville, FL 32603, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://media.glassdoor.com/l/3c/d5/fc/f7/bryant-space-science-center.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.34574870000002,
	 29.6488872
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BRY",
        "name": "Bryan Hall",
	"address": "Gainesville, FL 32603, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://historic.facilities.ufl.edu/Images/bryan_hall_images/bryanhallsmall.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3402381,
	 29.65131189999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "BSU",
        "name": "Veterinary Medicine - Basic Sciences",
	"adress": "2001 S Lincoln Ave, Urbana, IL 61802, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/UF-VetMedFoodAnimalClinic.JPG/240px-UF-VetMedFoodAnimalClinic.JPG",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -88.22091189999999,
	 40.0929927
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CAR",
        "name": "Carleton Auditorium",
	"address": "1475 Union Rd, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://historic.facilities.ufl.edu/Images/carlton/carlton.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.34172290000001,
	 29.6490716
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CBD",
        "name": "Classroom Building 105",
	"address": "Classroom Bldg 105, Gainesville, FL 32603, USA",
        "indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
	"image": "https://i.ibb.co/ykk7JNx/Screen-Shot-2018-12-01-at-10-43-24-AM.png",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3429757,
	 29.6529864
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CGRC",
        "name": "Cancer/Genetics Research",
	"address": "2033 Mowry Rd, Gainesville, FL 32608, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "https://com-education-admissions.sites.medinfo.ufl.edu/files/2011/08/cancer-genetics-research-complex.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3516905,
	 29.6381861
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CHE",
        "name": "Chemical Engineering",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
	"image": "http://web.uflib.ufl.edu/ufarch/chemeng.jpg",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3549302,
	 29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CLB",
        "name": "Chemistry Laboratory Building",
	"address": "125 Buckman Dr, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/chemistrylab.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.344152,
	  29.6508873
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "COM",
        "name": "Communicore - Health Sciences Center",
	"address": "1600 SW Archer Rd, Gainesville, FL 32610, United State",
        "indoors": "Indoor & Outdoor",
	"image": "http://old.library.health.ufl.edu/about/VirtualTour/images/com_653x258s.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.343777,
	  29.6399441
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CON",
        "name": "Constans Theatre",
	"address": "687 McCarty Dr, Gainesville, FL 32603, United States",
        "indoors": "Indoor",
	"image": "https://arts.ufl.edu/site/assets/files/153395/cota_stock_photo_-_nadine_mcguire_pavilion.-thumbnail.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.346482,
	  29.6460125
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CRR",
        "name": "Carr Hall",
	 "address": "Gainesville, FL 32603, United States",
        "indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/carr.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.3549302,
	   29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "CSE",
        "name": "Computer Science Engineering",
	"address": "432 Newell Dr, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
	"image": "https://www.eng.ufl.edu/marcom/wp-content/uploads/sites/14/2016/11/cise_building.png",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
              -82.344042,
	   29.64811109999999,
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "DAU",
        "name": "Dauer Hall - Arts & Sciences",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/dauer7.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
               -82.3439549,
	    29.64926969999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "DSB",
        "name": "Dental Science Building",
	"address": "Dental Science Bldg, Iowa City, IA 52242, USA",
	"indoors": "Indoor",
	"image": "https://c8.alamy.com/comp/MM2Y50/science-building-at-university-iowa-city-1925-MM2Y50.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -91.55115090000001,
	    41.662549
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ESL",
        "name": "Environmental Stress Lab",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Outdoor",
	"image": "https://i.ibb.co/q5q4H3C/Screen-Shot-2018-12-01-at-11-23-03-AM.png",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.3646433,
	     29.6354601
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "EYN",
        "name": "Entomology - Nematology",
	"address": "1881 Natural Area Dr, Gainesville, FL 32608, United States",
        "indoors": "Indoor",
	"image": "https://directory.ifas.ufl.edu/images/uf_bldg/original/B0970.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.3673518,
	     29.63483320000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FAA",
        "name": "Fine Arts A",
	"address": "1389 Stadium Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/fineartsbridge.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.3403431,
	     29.6477756
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FAB",
        "name": "Fine Arts B (Gallery)",
	"address": "400 SW 13th St, Gainesville, FL 32611, United States",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/fineartsb.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3396763,
	     29.6482567
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FAC",
        "name": "Fine Arts C",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/fac2.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.34041909999999,
	      29.6477604
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FAD",
        "name": "Fine Arts D",
	"address": "101 Fine Arts Bldg A, Gainesville, FL 32611, United States",
        "indoors": "Indoor & Outdoor",
        "image": "http://web.uflib.ufl.edu/ufarch/fineartsd.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3405634,
	      29.6481722
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FIF",
        "name": "Fifield Hall",
	"address": "Fifield Hall, Gainesville, FL 32611, United States",
        "indoors": "Indoor",
        "image": "http://web.uflib.ufl.edu/ufarch/fifield.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.36116679999999,
	      29.63838730000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FIRL",
        "name": "Plant Pathology Research Lab 1",
	"address": "155 Research Rd, Quincy, FL 32351, United States",
        "indoors": "Indoor & Outdoor",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOONXmK4HkpgxuICnAxwPGP7Zzst95jqzut7zOrwFnpe1ydFE",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -84.5928081,
	      30.5450208
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FLAV",
        "name": "Flavet Field",
	"address": "Woodlawn Dr, Gainesville, FL 32603, United States",
	"indoors": "Outdoor",
	"image": "http://recsports.ufl.edu/images/made/uploads/images/IMG_2290_512_341_80.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3543578,
	      29.6466255
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FLG",
        "name": "Florida Gym",
	"address": "Florida Gymnasium, Gainesville, FL 32603, United States",
        "indoors": "Indoor",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxU1Cn7oWZAXqgMsGzhNnUHlyyuFhzwbAbWJUm_hVu3LQaNigJhA",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.34724109999999,
	      29.64951450000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FLI",
        "name": "Keene-Flint Hall",
	"address": "80 Newell Dr, Gainesville, FL 32603, United States",
        "indoors": "Indoor",
	"image": "https://historic.facilities.ufl.edu/Images/keene_flint/keene.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.34405009999999,
	      29.6513768
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FLO",
        "name": "Griffin-Floyd Hall",
	"address": "230 Newell Dr, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://historic.facilities.ufl.edu/Images/griffin_floyd/griffin.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.34367999999999,
	      29.6500715
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "FSN",
        "name": "Food Science and Human Nutrition",
	 "address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://fshn.ifas.ufl.edu/media/fshn/images/DSC_0013-621x417.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3549302,
	       29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "GER",
        "name": "Gerson Hall",
	"address": "1368 Union Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://warrington.ufl.edu/about/wp-content/uploads/sites/19/2018/04/gerson-hall-south-16x9-960x540.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3401306,
	       29.65075890000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "GRAO",
        "name": "Graham Hall",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Indoor",
 	"image": "https://i.ibb.co/VjnQc9p/Screen-Shot-2018-12-01-at-12-00-50-PM.png",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
	},
      "geometry": {
        "coordinates": [
                 -82.3502568,
	        29.6458103
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "GRI",
        "name": "Grinter Hall - The Graduate School",
	"address": "1523 Union Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://i.ibb.co/YyXdrC0/Screen-Shot-2018-12-01-at-12-07-15-PM.png",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.34205949999999,
	        29.6492787
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HARN",
        "name": "Harn Museum of Art",
	"address": "3259 Hull Rd, Gainesville, FL 32607, United States",
	"indoors": "Indoor",
	"image": "http://www.harn.ufl.edu/sites/default/files/img/buildingfront-homepage_0.jpg",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.34205949999999,
	        29.6492787
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HCAD",
        "name": "Health Science Center Admin. Services",
	"address": "653 W 8th St, Jacksonville, FL 32209, United States",
	"indoors": "Indoor",
	"image": "https://library-demo.sites.medinfo.ufl.edu/files/2012/06/HSCLibrary_685px.jpg",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -81.6635251,
	        30.3470314
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HDC",
        "name": "Human Development Center",
	"address": "1401 E 1st St, Duluth, MN 55805, United States",
	"indoors": "Indoor",
	"image": "https://ufhealth.org/sites/default/files/styles/location_feature/public/Shands-UF-front.jpg?itok=fVevdwpV",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -92.0818267,
	        46.8013063
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HGS",
        "name": "Hough Hall",
	"address": "Hough Hall, Gainesville, FL 32611, USA",
	"indoors": "Indoor",
	"image": "http://rowearchitects.com/wp-content/uploads/2015/06/dda5bcdf68f28ff16e361ce9ce77f9c9.jpg",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3406662,
	        29.6504049
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HOL",
        "name": "Holland Law Center",
	"address": "Spessard L. Holland Law Center, Gainesville, FL 32603, USA",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/holland.jpg",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.35915059999999,
	        29.6498009
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HPNP",
        "name": "Health Professions, Nursing and Pharmacy Complex",
	"indoors": "Indoor",
	"address": "Health Professions, Nursing, Pharmacy Bldg, 1225 Center Dr, Gainesville, FL 32603, USA",
	"image": "https://phhp-research.sites.medinfo.ufl.edu/files/2011/01/building1a.jpg",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3452497,
	         29.6416764
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HUB",
        "name": "The Hub - International Studies Center",
	"address": "Hub, 1765 Stadium Rd, Gainesville, FL 32603, United States",
	"indoors": "Indoor & Outdoor",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Gville_UF_Hub01.jpg/1200px-Gville_UF_Hub01.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.34548769999999,
	         29.6480995
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "HUME",
        "name": "Hume Hall",
	"address": "Museum Rd, Gainesville, FL 32601, United States",
	"indoors": "Indoor",
	"image": "https://www.housing.ufl.edu/wp-content/uploads/sites/13/2017/07/05.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3525058,
	        29.644475
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "IBLC",
        "name": "Institute of Black Culture",
	"address": "1510 W University Ave, Gainesville, FL 32603, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/ibc.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3421446,
	         29.652285
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "IHLC",
        "name": "Institute of Hispanic-Latino Cultures",
	"address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/ihlc.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3549302,
	         29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "IIT",
        "name": "IFAS Information Technology",
	"address": "Gainesville, FL 32611, United States",
        "indoors": "Indoor",
	"image": "http://directory.ifas.ufl.edu/images/uf_bldg/original/B0089.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3443187,
	         29.6465201
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "INF",
        "name": "Infirmary",
	"address": "Fletcher Dr, Gainesville, FL 32603, United States",
	"indoors": "Indoor & Outdoor",
	"image": "https://historic.facilities.ufl.edu/Images/infirmary/infirmarynurseswing.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.34652009999999,
	         29.6495392
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "JENB",
        "name": "Jennings Hall B",
	"address": "1515 Museum Rd, Gainesville, FL 32612, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/jennings-l.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.34155299999999,
	          29.6444873
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "KEY",
        "name": "Keys Complex - Student Housing",
	"address": "1231 SW 3rd Ave, Gainesville, FL 32601, United States",
	"indoors": "Indoor",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NsMTcZqWfRpRu0TmQuMWCnrL6iUCWPiFp-ebrk1-azBA8_yF",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.33802899999999,
	         29.64918299999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "LAR",
        "name": "Larsen Hall",
	"address": "Larsen Hall, Gainesville, FL 32603, USA",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/larsen.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.34738279999999,
	         29.6431067
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "LBW",
        "name": "Library West",
	"address": "1545 W University Ave, Gainesville, FL 32603, United States",
	"indoors": "Indoor & Outdoor",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/UF-LibraryWest.JPG/275px-UF-LibraryWest.JPG",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3417565,
	         29.6508246
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "LEI",
        "name": "Leigh Hall",
	"address": "Leigh Hall, Gainesville, FL 32603, USA",
	"indoors": "Indoor & Outdoor",
	"image": "https://historic.facilities.ufl.edu/Images/leigh/leighhallsmall.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3442503,
	         29.6504567
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "LIT",
        "name": "Little Hall",
	 "address": "Stadium Rd, Gainesville, FL 32601, United States",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/littl2.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3407919,
	          29.648841
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "LSP",
        "name": "Livestock Pavilion, Webb",
	"address": "Gainesville, FL 32603, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/webb.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3511053,
	          29.6339886
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MAE",
        "name": "Materials Engineering",
	"address": "Gainesville, FL 32603, United States",
	"indoors": "Indoor",
	"image": "https://batich.mse.ufl.edu/wp-content/uploads/2014/12/header1-450x194.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3490228,
	         29.6476334
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MAEA",
        "name": "Mechanical and Aerospace Engineering, Bldg. A",
	 "address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNG3iFTT99D7UnyYJ6_i-ZLIK4Yi8oi2wxdD-yzGfq-5TuFp_BnA",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3549302,
	         29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MAT",
        "name": "Matherly Hall",
	"address": "1405 W University Ave, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/UF_Matherly_Entrance.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3410518,
	        29.65163059999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MBI",
        "name": "McKnight Brain Institute",
	"address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://neurology.ufl.edu/files/2011/09/mbi2.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3549302,
	        29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCCA",
        "name": "McCarty Hall, Bldg. A",
	"address": "McCarty Hall A, Gainesville, FL 32603, USA",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/mccartya.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3453474,
	        29.6466758
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCCB",
        "name": "McCarty Hall, Bldg. B",
	"address": "McCarty Hall B, Gainesville, FL 32603, USA",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/mccartyb.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.34492809999999,
	         29.6467422
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCCC",
        "name": "McCarty Hall, Bldg. C",
	"address": "McCarty Hall C, Gainesville, FL 32603, USA",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/mccartyc.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3453474,
	         29.6466758
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCCD",
        "name": "McCarty Hall, Bldg. D",
	"address": "McCarty Hall D, Gainesville, FL 32603, USA",
        "indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/mccartyd.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3443186,
	          29.6465202
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCG",
        "name": "McGuire Center for Lepidoptera Research",
	"address": "McGuire Center for Lepidoptera Research, Gainesville, FL 32608, USA",
	"indoors": "Indoor",
	"image": "https://www.floridamuseum.ufl.edu/files/8414/0804/3773/JLG_7700-sm.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3712611,
	         29.6358453
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MCSB",
        "name": "Microbiology and Cell Science",
	"address": "1355 Museum Drive, Gainesville, FL 32603, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/microbiology2.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3628019,
	         29.6399739
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MSL",
        "name": "Marston Science Library",
	"address": "444 Newell Dr, Gainesville, FL 32611, United States",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/marston.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3439199,
	         29.6479572
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MUB",
        "name": "Music Building",
	"address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor & Outdoor",
	"image": "http://web.uflib.ufl.edu/ufarch/music3.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3425575,
	         29.6481303
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "MUS",
        "name": "Florida Museum of Natural History - Dickinson Hall",
	"address": "1659 Museum Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://s3.us-east-2.amazonaws.com/media.weddinglovely.com/media/vendors/55251/9424-_x700.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3438233,
	         29.6445166
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NEB",
        "name": "Engineering Building",
	"address": "1949 Stadium Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "http://edafl.com/wp-content/uploads/2014/06/UF-Engineering2-e1404766304130.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3485106,
	         29.6483809
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NEW",
        "name": "Newell Hall",
	"address": "Newell Hall, Gainesville, FL 32603, USA",
      	"indoors": "Indoor",
	"image": "https://www.wuft.org/news/files/2017/10/Newell-Hall-1050x525.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
	},
      "geometry": {
        "coordinates": [
                   -82.34505709999999,
	         29.6490871
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NPB",
        "name": "Physics Building",
	"address": "2001 Museum Rd, Gainesville, FL 32603, United States",
	"indoors": "Indoor",
	"image": "http://www.phys.ufl.edu/images/npb0803.JPG",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3496895,
	        29.6437825
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NRB",
        "name": "Nuclear Reactor",
	"address": "Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/UFTR_Exterior.jpg/1200px-UFTR_Exterior.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3549302,
	        29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NRG",
        "name": "Norman Gymnasium",
	"address": "119 W Main St, Norman, OK 73069, United States",
	"indoors": "Indoor",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gville_UF_Norman06.jpg/240px-Gville_UF_Norman06.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -97.4448615,
	        35.220559
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NRN",
        "name": "Norman Hall",
	"address": "Norman Hall, Gainesville, FL 32601, USA",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/norman3.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3381103,
	        29.6469686
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NRNA",
        "name": "Norman Hall Addition",
	"address": "Norman Hall Addition, Gainesville, FL 32601, USA",
	"indoors": "Indoor",
	"image": "https://historic.facilities.ufl.edu/Images/norman/normanfromsouth.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
	}
      },
      "geometry": {
        "coordinates": [
                 -82.33768599999999,
	        29.64664469999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NSC",
        "name": "Nuclear Sciences Center",
	"address": "1095 Nuclear Science Rd, College Station, TX 77843, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/nuclearscience.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -96.3629133,
	        30.5810924
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NUL",
        "name": "Animal Nutrition Labratory",
	"address": "1207 W Gregory Dr, Urbana, IL 61801, United States",
	"indoors": "Indoor",
	"image": "http://web.uflib.ufl.edu/ufarch/aninutlab.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -88.22516139999999,
	        40.10381579999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "NZH",
        "name": "Newins-Ziegler Hall",
	"address": "Newins-Ziegler Hall, Gainesville, FL 32603, USA",
	"indoors": "Indoor & Outdoor",
	"image": "https://c1.staticflickr.com/6/5455/8923955965_85bfd0122b_b.jpg",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.345686,
	        29.64539199999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ODAA",
        "name": "Office of Development and Alumni Affairs",
	"address": "1600 SW Archer Rd, Gainesville, FL 32610, United States",
	"indoors": "Indoor",
	"image": "https://i.ibb.co/JHGwBgh/Screen-Shot-2018-12-01-at-2-29-32-PM.png",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.343434,
	        29.6398626
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "OBS",
        "name": "Student Observator",
	"address": "30 Alta Rd, Palo Alto, CA 94305, United States",
	"indoors": "Indoor",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZd9SPEbPbIkp1Rv1bf9DzhLr-dpsV5LaX-UuKKlnKqOaYJH2",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -122.181827,
	        37.4191274
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PCPA",
        "name": "Phillips Center for the Performing Arts",
	"address": "3201 Hull Rd, Gainesville, FL 32611, United States",
	"indoors": "Indoor",
	"image": "https://performingarts.ufl.edu/wp-content/uploads/2007/05/phillips1.jpg",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.36930579999999,
	        29.6352583
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PEA",
        "name": "Peabody Hall",
	"address": "Union Rd, Gainesville, FL 32603, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/peabody.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3419924,
	        29.6500771
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PHL",
        "name": "Phelps Laboratory",
	"address": "701 N Broadway, Sleepy Hollow, NY 10591, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/phelps.jpg",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -73.8639555,
	        41.1091195
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PKY",
        "name": "P. K. Yonge Developmental Research School, 1080 SW 11 Street",
	"address": "1080 SW 11th St, Gainesville, FL 32601, United States",
	"image": "http://dconnerassociates.com/wp-content/uploads/2014/10/c1-750x375.jpg",
        "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3346766,
	        29.64006539999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "POOL",
        "name": "Florida Pool",
	"address": "Gainesville, FL 32603, United States",
	"image": "http://recsports.ufl.edu/images/made/uploads/images/IMG_2038_512_341_80.jpg",
	"indoors": "Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3409362,
	        29.6462255
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "POW",
        "name": "Powell Hall - New Museum of Natural History",
	"address": "3215 Hull Rd, Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/powell3.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3704006,
	         29.6358224
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PPD",
        "name": "Physical Plant Offices",
	"address": "Gainesville, FL 32611, United States",
	"image": "https://i.ibb.co/9n2XmcX/Screen-Shot-2018-12-01-at-5-56-46-PM.png",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                     -82.3705092,
	          29.6443197
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PRL",
        "name": "Food and Environmental Toxicology Lab",
      	"address": "1207 W Gregory Dr, Urbana, IL 61801, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/foodenvtox.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
	},
      "geometry": {
        "coordinates": [
                     -82.3549302,
	          29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PSB",
        "name": "Shands Patient Services",
	"address": "1515 SW Archer Rd, Gainesville, FL 32608, United States",
	"image": "https://ufhealth.org/sites/default/files/Cancer%20Hospital%20exterior.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3423068,
	          29.6388866
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PSF",
        "name": "Plant Science Facility",
	"address": "1515 SW Archer Rd, Gainesville, FL 32608, United States",
	"image": "https://wfrec.ifas.ufl.edu/media/wfrecifasufledu/images/Anniversary-Postcard---Front.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.3549302,
	         29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PST",
        "name": "Particle Sciences and Technology",
	"address": "3894 Courtney St, Bethlehem, PA 18017, United States",
	"image": "https://www.eng.ufl.edu/nimet/wp-content/uploads/sites/52/2015/03/NIMET-building.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        } 
      },
      "geometry": {
        "coordinates": [
                  -75.37462699999999,
	         40.671417
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PSY",
        "name": "Psychology",
	"address": "2121 NW 40th Terrace Ste B, Gainesville, FL 32605, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/psychology.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.38416389999999,
	          29.67284690000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "PUGH",
        "name": "Pugh Hall",
	"address": "Pugh Hall, Gainesville, FL 32603, USA",
	"image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Pugh_Hall_at_the_University_of_Florida.JPG",
      	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
	},
      "geometry": {
        "coordinates": [
                   -82.34546309999999,
	          29.6494289
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RCD",
        "name": "Recreation Center Dining",
	"address": "114 Rec Center, Gainesville, FL 32611, United States",
	"image":"http://web.uflib.ufl.edu/ufarch/recfcdining.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3464309,
	          29.650204
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "REI",
        "name": "Reitz Union",
	"address": "686 Museum Rd, Gainesville, FL 32611, United States",
	"image": "http://news.ufl.edu/media/newsufledu/images/ReitzUnion_02-02-16.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3476523,
	          29.6463395
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RFC",
        "name": "Recreation and Fitness Center",
	"image": "http://recsports.ufl.edu/images/made/uploads/images/SRFC_512_363_80.jpg",
	 "address": "244 Fletcher Dr, Gainesville, FL 32603, United States",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.34675969999999,
	          29.6501107
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RHN",
        "name": "Rhines Hall",
	"address": "Rhines Hall, Gainesville, FL 32603, USA",
	"image": "http://web.uflib.ufl.edu/ufarch/rhines.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.34902249999999,
	          29.6476341
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RLA",
        "name": "Reed Lab",
	"address": "55 Dimock St, Boston, MA 02119, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/reedlab.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -71.0979212,
	           42.31957420000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RL1",
        "name": "Research Laboratory",
	"address": "1911 SW 34th St, Gainesville, FL 32608, United States",
	"image": "https://i.ibb.co/4NB7ckp/Screen-Shot-2018-12-01-at-3-16-47-PM.png",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                  -82.371461,
	           29.634407
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "RNK",
        "name": "Rinker Hall",
	"address": "Rinker Hall, 573 Newell Dr, Gainesville, FL 32603, USA",
	"image": "http://www.aiatopten.org/sites/default/files/styles/popup/public/02-east_elevation.jpg?itok=4XO_PdN1",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.34316059999999,
	           29.64695920000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ROG",
        "name": "Rogers Hall",
	"address": "Gainesville, FL 32608, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/rogers.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                   -82.3449972,
	           29.6449409
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "ROL",
        "name": "Rolfs Hall",
	"address": "Rolfs Hall, Gainesville, FL 32603, USA",
	"image": "https://historic.facilities.ufl.edu/Images/rolfs/rolfshallsmall.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                    -82.3444921,
	           29.6492897
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SBH",
        "name": "Steinbrenner Band Hall",
      	 "address": "Gainesville, FL 32611, United States",
	"image": "https://images.fineartamerica.com/images-medium-large-5/steinbrenner-band-hall-main-street-entry-lynn-palmer.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
	},
      "geometry": {
        "coordinates": [
                     -82.3549302,
	           29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SIS",
        "name": "Sisler Hall - Chemistry Research Bldg",
	"address": "1680 Union Rd, Gainesville, FL 32611, United States",
	"image": "https://www.gainesville.com/storyimage/LK/20120113/SPORTS/604130720/AR/0/AR-604130720.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                     -82.34416809999999,
	            29.6499992
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SMA",
        "name": "Library East, Smathers",
	"address": "1545 W University Ave, University of Florida, Gainesville, FL 32611, United States",
	"image": "https://historic.facilities.ufl.edu/Images/smathers/smatherseastsmall.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                      -82.34281469999999,
	            29.6515513
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SOC",
        "name": "Stephen C. O'Connell Center Pool",
	"address": "Gainesville, FL 32603, United States",
	"image": "http://recsports.ufl.edu/images/made/uploads/images/IMG_7332_512_341_80.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.3409362,
	            29.6462255
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SPRC",
        "name": "Springs Commons Building",
	"address": "Diamond Village Commons Bldg, 1402 Diamond Rd, Gainesville, FL 32603, USA",
	"image": "https://housing.ufl.edu/wp-content/uploads/2017/08/Springs-Complex-Exterior.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                -82.34048229999999,
	          29.6423855
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SPRT",
        "name": "IFAS Support Services",
	"address": "Gainesville, FL 32603, United States",
	"image": "http://personnel.ifas.ufl.edu/images/webIFASlogo.png",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3443187,
	          29.6465201
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SSB",
        "name": "Criser Hall",
	"address": "1478 Union Rd, Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/criser2.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.34160899999999,
	           29.6501881
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "STA",
        "name": "Stadium, Ben Hill Griffin",
	"address": "157 Gale Lemerand Dr, Gainesville, FL 32601, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/stadium4.jpg",
	"indoors": "Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
                 -82.3485788,
	           29.6499357
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "STZ",
        "name": "Stuzin Hall - Business Building",
	"address": "1454, 100 Stuzin Hall Union Rd, Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/businesscourt.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	            -82.3411782,
		29.650815
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "SWC",
        "name": "SW Recreation Complex",
	"address": "13120 Vonn Rd, Largo, FL 33774, United States",
	"image": "http://recsports.ufl.edu/images/made/uploads/images/SWRC2_512_363_80.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	          -82.8187822,
		27.8920203
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "THC",
        "name": "Teaching Hospital and Clinics, Shands",
	"address": "4645 NW 8th Ave, Gainesville, FL 32605, United States",
	"image": "https://pediatrics.med.ufl.edu/files/2015/04/Uf-Health-Shands-Childrens-Hospital-exterior.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	         -82.3928509,
		29.659113
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "TIG",
        "name": "Tigert Hall - UF Administration",
	"address": "Gainesville, FL 32611, United States",
	"image": "https://historic.facilities.ufl.edu/Images/tigert/tigert.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	        -82.3549302,
		29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "TUR",
        "name": "Turlington Hall",
	"address": "330 Newell Dr, Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/turlington.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	         -82.343747,
		29.6489642
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "UST",
        "name": "Ustler Hall",
	"address": "Ustler Hall, Gainesville, FL 32608, USA",
	"image": "https://s3-media3.fl.yelpcdn.com/bphoto/WEZ5WRXtNDjUBVbCaa-DTw/348s.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	        -82.3468705,
		29.65044320000001
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "VAN",
        "name": "Van Fleet Hall - ROTC",
	"address": "204 Van Fleet Hall, Gainesville, FL 32611, United States",
	"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/UF_VanFleetHall.jpg/300px-UF_VanFleetHall.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	        -82.3511003,
		29.6485548
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "VET",
        "name": "Veterinary Science",
	"address": "2015 SW 16th Ave, Gainesville, FL 32608, United States",
	"image": "https://i.imgur.com/6mi5axX.jpg?fb",
	 "indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	         -82.3502601,
		29.6332527
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "VMAW",
        "name": "Veterinary Medicine - Academic Wing",
	"address": "Veterinary Medicine Academic Bldg, Gainesville, FL 32608, USA",
	"image": "https://largeanimal.vethospitals.ufl.edu/files/2011/08/IMG_6302.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	         -82.3487936,
		29.6338194
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WAL",
        "name": "Walker Hall",
	"address": "1489 Union Rd, Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/walker.JPG",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	        -82.34153959999999,
		29.64937919999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WALC",
        "name": "Wallace Hall",
	"address": "1001 George Wallace Dr, Gadsden, AL 35903, United States",
	"image": "https://neurogenetics.med.ufl.edu/files/2011/12/Cancer-Genetics-building-31.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	         -85.9915726,
		33.9958184
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WAU",
        "name": "Lake Wauburg",
	"address": "Lake Wauburg, Florida 32667, USA",
	"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgvDnZDYXNg4cBU1PV6d2ogm3cAJPfLJfJwIw5mwYvEZJbPnj",
	"indoors": "Outdoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	          -82.30313,
		29.5298432
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WEIL",
        "name": "Weil Hall",
	"address": "Weil Hall, Gainesville, FL 32603, USA",
	"image": "https://historic.facilities.ufl.edu/Images/weil/weilhallsmall.jpg",
	"indoors": "Indoor",
        "quietSpot" : "Not Quiet Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	          -82.3485109,
		29.64838079999999
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WEIM",
        "name": "Weimer Hall",
	"address": "Weimer Hall, Gainesville, FL 32603, USA",
	"image": "http://web.uflib.ufl.edu/ufarch/weimer3.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	   -82.34752759999999,
		29.6478351
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WM",
        "name": "Williamson Hall",
	"address": "Gainesville, FL 32611, United States",
	"image": "http://web.uflib.ufl.edu/ufarch/williamson1.jpg",
	 "indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	  -82.3549302,
		 29.6436325
        ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "WSFL",
        "name": "Weed Sciences Field Building",
	"address": "Weed Sciences Field Bldg, Gainesville, FL 32603, USA",
	"image": "https://wfrec.ifas.ufl.edu/media/wfrecifasufledu/images/Anniversary-Postcard---Front.jpg",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	  -82.36376249999999,
		 29.6391841     
      ],
        "type": "Point"
      }
    },
{
      "type": "Feature",
      "properties": {
        "code": "YON",
        "name": "Yon Hall",
	"address": "Gainesville, FL 32608, United States",
	"image": "https://bloximages.chicago2.vip.townnews.com/alligator.org/content/tncms/assets/v3/editorial/d/c5/dc5c7632-56b3-11e5-9e98-73156efa4248/55efc3ec18266.image.jpg?resize=400%2C267",
	"indoors": "Indoor & Outdoor",
        "quietSpot" : "Including Quiet Spot & Group Spot",
        icon: {
        iconUrl: 'http://www.clker.com/cliparts/g/R/z/I/u/o/map-pin-md.png',
        iconSize: [20,30],
        iconAnchor: [0.0],
        popupAnchor: [0, -25],
        className: 'dot'
        }
      },
      "geometry": {
        "coordinates": [
	  -82.3478071,
		29.6498808
       ],
        "type": "Point"
      }
    }
];

	var mapGeo = L.map('map-popups-js').setView([29.642526, -82.356317], 14);
	var tl =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		style: 'mapbox://styles/yingwenhuang/cjp4v1m8k02b82sqxy3ugknc4',
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoieWluZ3dlbmh1YW5nIiwiYSI6ImNqb2dsdGZnbTBnanEzcXF2bDJseDgzaG8ifQ.k4xY67lG4MkbzMFDHjDK5A'
	}).addTo(mapGeo);


var code;
var name;

var defaultLayer = L.geoJSON(geojson)
                .bindPopup(function(e){
                        var content = '<p><strong>' + e.feature.properties.code + '</p><p>'
                + e.feature.properties.name + '</p><p>' + e.feature.properties.address+ '</p><p>'
                + e.feature.properties.indoors+ '</p><p>' + e.feature.properties.quietSpot
                + '</strong></p><img src="' + e.feature.properties.image + '" alt="" style="width:250px;height:150px;">';
                        return content;
                })
                .addTo(mapGeo);

defaultLayer.on('click',function (e){
                var marker = e.layer;
                var feature = marker.feature;
                code = feature.properties.code;
                name = feature.properties.name;
                document.getElementById('displayCode').innerHTML = code;
                document.getElementById('displayName').innerHTML = name;
});

$('#search').keyup(textSearching);
function textSearching(){
	mapGeo.eachLayer(function (layer){
		if(layer !== tl)
		{
			mapGeo.removeLayer(layer);
	}
	});
	
	var myLayer = L.geoJSON(geojson, {filter: searching})
		.bindPopup(function(e){
			var content = '<p><strong>' + e.feature.properties.code + '</p><p>'
                + e.feature.properties.name + '</p><p>' + e.feature.properties.address+ '</p><p>'
                + e.feature.properties.indoors+ '</p><p>' + e.feature.properties.quietSpot
                + '</strong></p><img src="' + e.feature.properties.image + '" alt="" style="width:250px;height:150px;">';
			return content;
		})
		.addTo(mapGeo);

	function searching(feature){
		var searchString = $('#search').val().toLowerCase();
		if(!searchString)
			return 1;
		else
			return feature.properties.code.toLowerCase().indexOf(searchString) !== -1 || feature.properties.name.toLowerCase().indexOf(searchString) !== -1;
	}
	myLayer.on('click',function (e){
                var marker = e.layer;
                var feature = marker.feature;
                code = feature.properties.code;
                name = feature.properties.name;
                document.getElementById('displayCode').innerHTML = code;
                document.getElementById('displayName').innerHTML = name;
});
}

$(document).ready(function(){
	$("input:checkbox").change(function(){
		var valueQ = "not quiet spot";
		var valueI = "indoor";
		var valueO = "outdoor";

		mapGeo.eachLayer(function (layer){
                if(layer !== tl)
                {
                        mapGeo.removeLayer(layer);
        	}
        	});

        var myLayer = L.geoJSON(geojson, {filter: searching})
                .bindPopup(function(e){
                        var content = '<p><strong>' + e.feature.properties.code + '</p><p>'
                + e.feature.properties.name + '</p><p>' + e.feature.properties.address+ '</p><p>'
                + e.feature.properties.indoors+ '</p><p>' + e.feature.properties.quietSpot
                + '</strong></p><img src="' + e.feature.properties.image + '" alt="" style="width:250px;height:150px;">';
                        return content;
                })
                .addTo(mapGeo);
		
	function searching(feature){	
	if($('#ifQuiet').prop("checked")==true && $('#ifIndoor').prop("checked")==false && $('#ifOutdoor').prop("checked")==false) {
        			return feature.properties.quietSpot.toLowerCase().indexOf(valueQ.toLowerCase()) == -1;
		}
		else if($('#ifQuiet').prop("checked")==false && $('#ifIndoor').prop("checked")==true && $('#ifOutdoor').prop("checked")==false){
                                return feature.properties.indoors.toLowerCase().indexOf(valueI.toLowerCase()) !== -1;
		}
		else if($('#ifQuiet').prop("checked")==false && $('#ifIndoor').prop("checked")==false && $('#ifOutdoor').prop("checked")==true){
                                return feature.properties.indoors.toLowerCase().indexOf(valueO.toLowerCase()) !== -1;
                }
		else if($('#ifQuiet').prop("checked")==true && $('#ifIndoor').prop("checked")==true && $('#ifOutdoor').prop("checked")==false){
                                return feature.properties.indoors.toLowerCase().indexOf(valueI.toLowerCase()) !== -1 
					&& feature.properties.quietSpot.toLowerCase().indexOf(valueQ.toLowerCase()) == -1;
                }
		else if($('#ifQuiet').prop("checked")==true && $('#ifIndoor').prop("checked")==false && $('#ifOutdoor').prop("checked")==true){
                                return feature.properties.indoors.toLowerCase().indexOf(valueO.toLowerCase()) !== -1 && 
					feature.properties.quietSpot.toLowerCase().indexOf(valueQ.toLowerCase()) == -1;
                }
		else if($('#ifQuiet').prop("checked")==false && $('#ifIndoor').prop("checked")==true && $('#ifOutdoor').prop("checked")==true){
                                return feature.properties.indoors.toLowerCase().indexOf(valueI.toLowerCase()) !== -1 
					&& feature.properties.indoors.toLowerCase().indexOf(valueO.toLowerCase()) !== -1; 
                }
		else if($('#ifQuiet').prop("checked")==true && $('#ifIndoor').prop("checked")==true && $('#ifOutdoor').prop("checked")==true){
                                return feature.properties.indoors.toLowerCase().indexOf(valueI.toLowerCase()) !== -1 
                                        && feature.properties.indoors.toLowerCase().indexOf(valueO.toLowerCase()) !== -1 
					&& feature.properties.quietSpot.toLowerCase().indexOf(valueQ.toLowerCase()) == -1;
                }
		else{
                                return 1;
                        }
		}

	myLayer.on('click',function (e){
                var marker = e.layer;
                var feature = marker.feature;
                code = feature.properties.code;
                name = feature.properties.name;
                document.getElementById('displayCode').innerHTML = code;
                document.getElementById('displayName').innerHTML = name;
	});
});
});
	if(!Auth.getEmail()){
        $location.path('/login');
    }
});
