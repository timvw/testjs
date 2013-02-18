var expect = require('expect.js');
var SokobanLogic = require('../sokobanlogic.js').SokobanLogic;

describe('When moving the player', function(){
    describe('the player is on a goal cell', function(){
        var sut = new SokobanLogic();
        sut.board = [[sut.playerOnGoal, sut.floor]];
        sut.rowIndexForPlayer= 0;
        sut.columnIndexForPlayer = 0;
        sut.moves = [];

        sut.move(0,1);

        it('should make the source cell a goal', function(){
            expect(sut.board[0][0]).to.be(sut.goal);
        });

        it('should move the player to the target cell', function(){
            expect(sut.board[0][1]).to.be(sut.player);
        });

        it('should register a move',function(){
            expect(sut.getNumberOfMoves()).to.be(1);
        });
    });

    describe('the player is on a floor cell',function(){
        describe('the target cell is out of bounds', function(){
            var sut = new SokobanLogic();
            sut.board = [[sut.player]];
            sut.rowIndexForPlayer= 0;
            sut.columnIndexForPlayer = 0;
            sut.moves = [];

            sut.move(0,1);

            it('should not move the player',function(){
                expect(sut.board[0][0]).to.be(sut.player);
            });

            it('should not register a move', function(){
                expect(sut.getNumberOfMoves()).to.be(0);
            });
        });

        describe('the target cell is a floor', function(){
            var sut = new SokobanLogic();
            sut.board = [[sut.player, sut.floor]];
            sut.rowIndexForPlayer= 0;
            sut.columnIndexForPlayer = 0;
            sut.moves = [];

            sut.move(0,1);

            it('should move the player to the target cell', function(){
                expect(sut.board[0][1]).to.be(sut.player);
            });

            it('should make the source cell a floor', function(){
                expect(sut.board[0][0]).to.be(sut.floor);
            });

            it('should register a move',function(){
                expect(sut.getNumberOfMoves()).to.be(1);
            });
        });

        describe('the target cell is a goal', function(){
            var sut = new SokobanLogic();
            sut.board = [[sut.player, sut.goal]];
            sut.rowIndexForPlayer= 0;
            sut.columnIndexForPlayer = 0;
            sut.moves = [];

            sut.move(0,1);

            it('should move the player to the target cell', function(){
                expect(sut.board[0][1]).to.be(sut.playerOnGoal);
            });

            it('should make the source cell a floor', function(){
                expect(sut.board[0][0]).to.be(sut.floor);
            });

            it('should register a move',function(){
                expect(sut.getNumberOfMoves()).to.be(1);
            });
        });

        describe('the target cell is a wall', function(){
            var sut = new SokobanLogic();
            sut.board = [[sut.player, sut.wall]];
            sut.rowIndexForPlayer= 0;
            sut.columnIndexForPlayer = 0;
            sut.moves = [];

            sut.move(0,1);

            it('should not move the player', function(){
                expect(sut.board[0][0]).to.be(sut.player);
            });

            it('should not move the wall', function(){
                expect(sut.board[0][1]).to.be(sut.wall);
            });

            it('should not register a move',function(){
                expect(sut.getNumberOfMoves()).to.be(0);
            });
        });

        describe('the target cell is a box', function(){
            describe('the cell adjacent to the box is out of bounds',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should not move the player', function(){
                    expect(sut.board[0][0]).to.be(sut.player);
                });

                it('should not move the box', function(){
                    expect(sut.board[0][1]).to.be(sut.box);
                });

                it('should not register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(0);
                });
            });

            describe('the cell adjacent to the box is a wall',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box, sut.wall]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should not move the player', function(){
                    expect(sut.board[0][0]).to.be(sut.player);
                });

                it('should not move the box', function(){
                    expect(sut.board[0][1]).to.be(sut.box);
                });

                it('should not register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(0);
                });
            });

            describe('the cell adjacent to the box is a box',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box, sut.box]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should not move the player', function(){
                    expect(sut.board[0][0]).to.be(sut.player);
                });

                it('should not move the box', function(){
                    expect(sut.board[0][1]).to.be(sut.box);
                });

                it('should not register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(0);
                });
            });

            describe('the cell adjacent to the box is a box on a goal',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box, sut.boxOnGoal]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should not move the player', function(){
                    expect(sut.board[0][0]).to.be(sut.player);
                });

                it('should not move the box', function(){
                    expect(sut.board[0][1]).to.be(sut.box);
                });

                it('should not register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(0);
                });
            });

            describe('the cell adjacent to the box is a goal',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box, sut.goal]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should move the player to the target cell', function(){
                    expect(sut.board[0][1]).to.be(sut.player);
                });

                it('should make the source cell a floor', function(){
                    expect(sut.board[0][0]).to.be(sut.floor);
                });

                it('should move the box to the goal', function(){
                    expect(sut.board[0][2]).to.be(sut.boxOnGoal);
                });

                it('should register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(1);
                });
            });

            describe('the cell adjacent to the box is a floor',function(){
                var sut = new SokobanLogic();
                sut.board = [[sut.player, sut.box, sut.floor]];
                sut.rowIndexForPlayer= 0;
                sut.columnIndexForPlayer = 0;
                sut.moves = [];

                sut.move(0,1);

                it('should move the player to the target cell', function(){
                    expect(sut.board[0][1]).to.be(sut.player);
                });

                it('should make the source cell a floor', function(){
                    expect(sut.board[0][0]).to.be(sut.floor);
                });

                it('should move the box to the floor', function(){
                    expect(sut.board[0][2]).to.be(sut.box);
                });

                it('should register a move',function(){
                    expect(sut.getNumberOfMoves()).to.be(1);
                });
            });


        });
    });
});
