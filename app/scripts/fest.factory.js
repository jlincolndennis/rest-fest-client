(function() {
  'use strict';

  angular.module('clientApp')
    .factory('festFactory', festFactory);

    festFactory.$inject = ['$log'];

    function festFactory($log) {
      const fests = [
        {
          name: 'Awesome Fest 2017',
          startDate: new Date('August 14, 2017'),
          endDate: new Date('August 17, 2017'),
          headliners: [
            'Fish Stix',
            'Jimmy Cracks Corn',
            'Grapes of Rad'
          ],
          location: 'Jacksons Hole, WY',
          postedOn: new Date()
        },
        {
          name: 'SuperCoolMusicJamzz 17',
          startDate: new Date('June 1, 2017'),
          endDate: new Date('June 7, 2017'),
          headliners: [
            'Granny\'s Basement',
            'CandyGram',
            'The Nice Boys',
            'Hello Mother'
          ],
          location: 'Denver, CO',
          postedOn: new Date()
        },
        {
          name: 'Every One Of The Next Day\'s Social Gatherings',
          startDate: new Date('May 24, 2017'),
          endDate: new Date('May 26, 2017'),
          headliners: [
            'The Satin Subway',
            'Metal Blimp'
          ],
          location: 'Las Vegas, NV',
          postedOn: new Date()
        },
        {
          name: 'Music Is Pretty Neat Fest',
          startDate: new Date('September 3, 2017'),
          endDate: new Date('September 7, 2017'),
          headliners: [
            'Mrs. Johnson\'s Clavical',
            'The Dog House Boyzzzzz',
            'Spunky Jones and The Excited Taxidermists'
          ],
          location: 'San Francisco, CA',
          postedOn: new Date()
        },
        {
          name: 'Tunez N Stuff',
          startDate: new Date('July 6, 2017'),
          endDate: new Date('July 9, 2017'),
          headliners: [
            'Funky Dave',
            'The Rubber Ducks',
            'BrUUm Closet',
            'Who Stole The Peanut Butter?'
          ],
          location: 'New York, NY',
          postedOn: new Date()
        },

      ];

      return {
        getFests: getFests,
        addFest: addFest,
        deletePost: deletePost
      }

      function getFests () {
        return fests;
      }

      function addFest(festObj){
        fests.push(festObj);
      }

      function deletePost(post) {
        var index = fests.indexOf(post);
        fests.splice(index, 1);

      }

    }

}());
