interface OldSystem {
	legacyRequest(): string;
}

class OldSystemImpl implements OldSystem {
	legacyRequest(): string {
		return "Legacy data";
	}
}

interface NewSystem {
	modernRequest(): { data: string };
}

class Adapter implements NewSystem {
	private oldSystem: OldSystem;
	
	constructor(oldSystem: OldSystem) {
		this.oldSystem = oldSystem;
	}
	
	modernRequest(): { data: string } {
		const result = this.oldSystem.legacyRequest();
		return { data: result };
	}
}

const old = new OldSystemImpl();
const adapter = new Adapter(old);
console.log(adapter.modernRequest());