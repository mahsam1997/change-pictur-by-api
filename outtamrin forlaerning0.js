const getSurveys=()=>{
	let config = {
		params:{accountId: this.$store.state.user.accountId},
		headers:{Authorization: `Bearer ${this.$store.state.user.token}`}
	};
	this.$http.get(this.server.getSurveys, config).then(response => {
		if(!response.data.result){
			let message = 'خطا در دریافت پرسشنامه ها';
			this.$store.dispatch('showMessage',{messageType: 'error', message})
		}else{
			this.surveys = response.data.data.filter((item) => {if(item.deleted !== true){return true;}});
			if(!this.surveys){
				this.surveys = [];
			}
			this.filter.selectedQuestionnaire = this.surveys[this.surveys.length-1].surveyId;
		}
	}).catch(error => {
		this.$store.dispatch('showErrorByStatusCode', error.response.status);
	});
}