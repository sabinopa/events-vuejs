const app = Vue.createApp({
  data() {
    return {
      searchQuery: '',
      companies: [],
      selectedCompany: null,
      eventTypes: [],
      selectedEventType: null,
      eventDate: '',
      numberAttendees: 0,
      dayType: 'weekday',
      availability: null,
      error: null
    };
  },
  created() {
    this.fetchCompanies();
  },
  methods: {
    fetchCompanies() {
      this.error = null;
      const params = this.searchQuery ? `?name=${this.searchQuery}` : '';
      fetch(`http://localhost:3000/api/v1/companies${params}`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error); });
          }
          return response.json();
        })
        .then(data => {
          this.companies = data;
        })
        .catch(error => {
          this.error = error.message;
          console.error('Error fetching companies:', error);
        });
    },
    showCompanyDetails(company) {
      this.selectedCompany = company;
      this.eventTypes = [];
      this.selectedEventType = null;
      this.availability = null;
      fetch(`http://localhost:3000/api/v1/companies/${company.id}/event_types`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error); });
          }
          return response.json();
        })
        .then(data => {
          this.eventTypes = data;
        })
        .catch(error => {
          this.error = error.message;
          console.error('Error fetching event types:', error);
        });
    },
    checkAvailability() {
      this.error = null;
      this.availability = null;
      const params = new URLSearchParams({
        date: this.eventDate,
        number_attendees: this.numberAttendees,
        day_type: this.dayType
      });
      fetch(`http://localhost:3000/api/v1/companies/${this.selectedCompany.id}/event_types/${this.selectedEventType.id}/availability?${params.toString()}`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error); });
          }
          return response.json();
        })
        .then(data => {
          this.availability = data;
        })
        .catch(error => {
          this.availability = { available: false, error: error.message };
          console.error('Error checking availability:', error);
        });
    }
  }
});

app.mount('#app');
