class CuiState extends cui.State {

	async onAction(act) {
		if (!/slot\d/.test(act)) return;
		let slot = act.slice(4);
		log('saving state to slot ' + slot);
		nostlan.launcher.saveState(slot);
		nostlan.launcher.unpause();
	}

	async onChange() {
		let $slots = $('#saveStateMenu_11 .cui');
		let states = nostlan.launcher.cfg.saveStates;
		for (let i = 0; i < $slots.length; i++) {
			let txt = i + ' ';
			if (states && states[i]) {
				txt += states[i].date;
			} else {
				txt += 'empty slot';
			}
			$slots.eq(i).text(txt);
		}
	}
}
module.exports = new CuiState();
