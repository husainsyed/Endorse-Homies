/*
Original author: Syed Husain
https://husainsyed.github.io
Please do not copy without permission
Copyrights Protected
*/

(async function() {

	var skillsExpanded = document.getElementsByClassName("pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted pv-skills-section__additional-skills--mercado")[0].getElementsByTagName("li-icon")[0].getAttribute("type") != "chevron-down-icon";
	if (!skillsExpanded){
		document.getElementsByClassName("pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted pv-skills-section__additional-skills--mercado")[0].click()
	}
    
    await new Promise(r => setTimeout(r, 500));
    var counter = 0;
    while (counter < 100) {
        var unendorsedList = document.getElementsByClassName("pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view");
        for (var i = 0; i < unendorsedList.length; i++) {
            unendorsedList[i].click();
            await new Promise(r => setTimeout(r, 500));
            document.getElementsByClassName("pv-endorsement-followup__radio-label t-14 t-black--light t-bold m0")[2].click()
            document.getElementsByClassName("full-width artdeco-button artdeco-button--2 artdeco-button--primary ember-view")[0].click()
        }
        counter++;
    }
})();