var Conference = Conference || {};

Conference.attendeeCollection = function() {
  var attendees = [];

  return {
    contains: function(attendee) {
      return attendees.indexOf(attendee) > -1;
    },
    add: function(attendee) {
      if (!this.contains(attendee)) {
        attendees.push(attendee);
      }
    },
    remove: function(attendee) {
      var index = attendees.indexOf(attendee);

      if (index > -1) {
        attendees.splice(index, 1);
      }
    },

    iterate: function(callback) {
      // attendees의 각 attendee에 대해 callback을 실행한다.
    }
  };
};