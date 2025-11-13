const Band = require("./band");


class ListBands {
    
    constructor() {
        this.listBands = [];
    }
    addBand(band = new Band()){
        this.listBands.push(band);
    }

    getBands() {
        return this.listBands;
    }

    deleteBand(id = '') {
        this.listBands = this.listBands.filter(
            band => band.id !== id);
            return this.listBands;
    }

    voteBand(id = '') {
        this.listBands = this.listBands.map(
            band => {
                if(band.id === id) {
                    band.votes++;
                    return band;
                } else {
                    return band;
                }
            }
        );
    }
}

module.exports = ListBands;