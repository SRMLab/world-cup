export function selectGender(gender) {
	// console.log("Action: ", gender)
	return {
		type: 'GENDER_SELECTED',
		payload: gender
	};
}

export function selectPerson(person) {
	console.log("Action: ", person)
	return {
		type: 'PERSON_SELECTED',
		payload: person
	};
}