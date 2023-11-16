class Piece {
    constructor (id, imgUrl) {
        this.id = id;
        this.groupId = id + 1 - id % 2;
        this.foundMatch = false;
        this.imgUrl = imgUrl;
        this.pieceEl = this.#createPieceEl();
    }

    #createPieceEl() {
        const piece = document.createElement("div");
        piece.className = "piece";
        piece.style.backgroundImage = this.imgUrl;

        return piece;
    }

    hideImg() {
        if (!this.foundMatch) this.pieceEl.style.background = "#fff";
    }
    
    showImg() {
        this.pieceEl.style.backgroundImage = this.imgUrl;
    }
}

class Game {
    constructor (pexesoContainer, imgArray) {
        this.pexesoContainer = pexesoContainer;
        this.imgArray = imgArray;
        this.pieces = this.createPieces();
    }

    createPieces() {
        const pieces = []
        for (let i = 0; i < this.imgArray.length * 2; i+=2) {
            //needed for deep copy
            const imgUrl = this.imgArray[i / 2]
            const piece = new Piece(i, imgUrl);
            const piece2 = new Piece(i+1, imgUrl);

            pieces.push(piece, piece2);
        }
        return pieces;
    }

    renderPexeso() {
        let showedPiece = null;
        let foundMatches = 0;
        let isSleeping = false;

        const pieceCount = this.pieces.length

        for (let i = 0; i < pieceCount; i++) {
            const piece = this.pieces[i];
            const pieceEl = piece.pieceEl;

            pieceEl.addEventListener("click", async () => {
                if (isSleeping) return;
                
                if (showedPiece && !piece?.foundMatch && showedPiece?.id !== piece?.id && showedPiece && showedPiece?.groupId === piece?.groupId) {
                    showedPiece.foundMatch = true;
                    piece.foundMatch = true;
                    piece.showImg();
                    console.log("found match");
                    showedPiece = null;
                    foundMatches++;

                    if (foundMatches >= pieceCount / 2) {
                        alert("You found all matches!");
                        this.startGame();
                    }
                } else if (showedPiece && !piece.foundMatch) {
                    piece.showImg();

                    isSleeping = true;
                    await this.sleep(1000);
                    isSleeping = false;

                    piece.hideImg();
                    showedPiece.hideImg();
                    showedPiece = null;
                } else if (showedPiece) {
                    showedPiece.hideImg();
                    showedPiece = null;
                } else {
                    piece.showImg();
                    showedPiece = piece;
                }
            })
            this.pexesoContainer.append(pieceEl);
        }
    }

    shufflePexeso() {
        for (let i = this.pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.pieces[i], this.pieces[j]] = [this.pieces[j], this.pieces[i]]
        }
    }

    hideAllPieces() {
        for (let i = 0; i < this.pieces.length; i++) {
            this.pieces[i].foundMatch = false;
            this.pieces[i].hideImg();
        }
    }

    startGame() {
        this.hideAllPieces();
        this.shufflePexeso();
        this.renderPexeso();

    }

    sleep(ms) {
        return new Promise(res => setTimeout(res, ms));    
    }
}

const imgArr = [];
for (let i = 0; i < 8; i++) {
    imgArr.push(`url("./img/${i}.jpg")`)
}

const pexesoContainer = document.getElementById("pexeso-container");
const game = new Game(pexesoContainer, imgArr);

game.startGame();