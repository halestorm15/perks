'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      name: 'A&W',
      image: 'https://satovconsultants.com/wp-content/uploads/2018/04/TorQuest-acquires-minority-stake-in-AW-Food-Services.jpg'
     },
     {
      name: 'Applebees',
      image: 'https://static.olocdn.net/menu/applebees/680265145b82b03a61c4f1b877df1cdd.jpg'
     },
     {
      name: 'Arbys',
      image: 'https://i.insider.com/5c741cf1eb3ce8494725fe03?width=1024&format=jpeg',
     },
     {
      name: 'Auntie Annes',
      image: 'https://img.grouponcdn.com/deal/rruzGpzj2hAbH8J33oLg/oS-700x420/v1/c700x420.jpg'
     },
     {
      name: 'Baja Fresh Mexican Grill',
      image: 'https://www.godairyfree.org/wp-content/uploads/2010/03/fast-food-baja-fresh.jpg'
     },
     {
      name: 'Baskin Robbins',
      image: 'https://www.familysavings.com/wp-content/uploads/2019/08/BR.png'
     },
     {
      name: 'Bubba Gump Shrimp Co',
      image: 'https://images.dailyhive.com/20180117064025/bubba-gump1.jpg'
     },
     {
      name: 'Chick filA',
      image: 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2019/12/most%20ordered/nuggetsmealheader.jpg'
     },
     {
      name: 'Chipotle',
      image: 'http://www.healthy-diet-habits.com/images/chipotlefood.jpg'
     },
     {
      name: 'Dave and Busters',
      image: 'https://media.daveandbusters.com/media/4916/busters-cheeseburger.jpg'
     },
     {
      name: 'Dickeys Barbecue Pit',
      image: 'https://assets3.thrillist.com/v1/image/2837079/1440x810/crop;jpeg_quality=60;progressive.jpg'
     },
     {
      name: 'Dominos Pizza',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/9f/14/3b/domino-s-pizza.jpg'

     },
     {
      name: 'Dunkin Donuts',
      image: 'https://pbs.twimg.com/media/ENnH4oSXkAYwm04.png'
     },
     {
      name: 'El Pollo Loco',
      image: 'https://www.elpolloloco.com/content/img/menu/14PC_FamiliaDinnerB_M1_2020_761X561.jpg'
     },
     {
      name: 'Firehouse Subs',
      image: 'https://www.firehousesubs.com/media/2120/italian_lg.jpg'
     },
     {
      name: 'Friendlys',
      image: 'https://cdn.newsday.com/polopoly_fs/1.37981788.1572349606!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg'
     },
     {
      name: 'Hard Rock',
      image: 'https://www.hardrockcafe.com/files/5282/Burger-1-061.jpg'
     },
     {
      name: 'Jamba Juice',
      image: 'https://mms.businesswire.com/media/20140813005895/en/427751/5/Juice_Group.jpg?download=1'
     },
     {
      name: 'MOD Pizza',
      image: 'https://www.foodbusinessnews.net/ext/resources/FBN-Features/4/Pizza_Lead.jpg?1524835651'
     },
     {
      name: 'Moes Southwest Grill',
      image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/Moes_1.jpg?itok=awcqcOGw'
     },
     {
      name: 'Outback Steakhouse',
      image: 'https://img1.mashed.com/img/gallery/the-real-reason-outback-steakhouse-is-struggling/intro-1529342489.jpg'
     },
     {
      name: 'PF Changs',
      image: 'https://mms.businesswire.com/media/20170118005866/en/565089/5/P.F._Chang%27s_Lettuce_Wraps.jpg?download=1'
     },
     {
      name: 'Panera Bread',
      image: 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/cheyenne/the-power-of-soup-lg0-0727d5785056b36_0727d6f3-5056-b365-ab606001b33dc2f0.jpg'
     },
     {
      name: 'Papa Johns',
      image: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/cheese-slate-compressed.jpg'
     },
     {
      name: 'Pizza Hut',
      image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/slideshow-images/slides/phut_0.jpg?itok=EZTbbhtW'
     },
     {
      name: 'Qdoba',
      image: 'https://libn.com/files/2017/09/Qdoba-from-Facebook.jpg'
     },
     {
      name: 'Ruby Tuesday',
      image: 'https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/2020-01/Ruby.jpg?itok=TWkpjK64'
     },
     {
      name: 'Starbucks',
      image: 'https://assets3.thrillist.com/v1/image/2857659/414x310/scale;jpeg_quality=65.jpg'
     },
     {
      name: 'Subway',
      image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/subway_3.jpg?itok=oFczoFF-'
     },
     {
      name: 'Taco Bell',
      image: 'https://www.hot-dinners.com/images/stories/blog/2018/tacobell.jpg'
     } 
    ], 
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
