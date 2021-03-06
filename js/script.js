var app = new Vue({
  el: '#root',
  data: {
    contacts: [{
  		name: 'Silvia',
  		avatar: 'img/avatar-2.png',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Hai portato a spasso Chicco?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Ricordati di dargli da mangiare',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 16:15:22',
  				text: 'Tutto fatto!',
  				status: 'received'
  			}
  		],
	  },
	  {
  		name: 'Fabio',
  		avatar: 'img/avatar-1.png',
  		visible: true,
  		messages: [
  			{
  				date: '20/03/2020 16:30:00',
  				text: 'Ciao come stai?',
  				status: 'sent'
  			},
  			{
  				date: '20/03/2020 16:30:55',
  				text: 'Bene grazie! Stasera ci vediamo?',
  				status: 'received'
  			},
  			{
  				date: '20/03/2020 16:35:00',
  				text: 'Devo andare a fare la spesa.',
  				status: 'sent'
  			}
  		],
	  },
	  {
  		name: 'Samuele',
  		avatar: 'img/avatar-3.png',
  		visible: true,
  		messages: [
  			{
  				date: '28/03/2020 10:10:40',
  				text: 'La Marianna va in campagna',
  				status: 'received'
  			},
  			{
  				date: '28/03/2020 10:20:10',
  				text: 'Sicuro di non aver sbagliato chat?',
  				status: 'sent'
  			},
  			{
  				date: '28/03/2020 16:15:22',
  				text: 'Ah scusa!',
  				status: 'received'
  			}
  		],
	  },
	  {
  		name: 'Luisa',
  		avatar: 'img/avatar-4.png',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Lo sai che ha aperto una nuova pizzeria?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Si, ma preferirei andare al cinema',
  				status: 'received'
  			}
  		],
	  }],
    activeIndex: 0,
    nameContact: "",
    userMessage: "",

  },
  methods: {
    selectContact: function(index) {
      this.activeIndex = index;
      console.log("active index", this.activeIndex);
      console.log(this.contacts[this.activeIndex])
      // Chat corrente: this.contacts[this.activeIndex]
    },

    addMessage: function() {
      var newObject = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.userMessage,
        status: 'sent'
      }
      this.contacts[this.activeIndex].messages.push(newObject);
      this.userMessage = "";

      setTimeout(function() {
        var newAutoObject = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: 'ok',
          status: 'received'
        };
        app.contacts[app.activeIndex].messages.push(newAutoObject);
      }, 1000);
    },

    searchContact: function() {
      this.contacts.forEach(
        (element) => {
          if (element.name.toLowerCase().includes(this.nameContact.toLowerCase())) {
            element.visible = true;
          } else {
            element.visible = false;
          }
        }
      );
    }
  },
});
