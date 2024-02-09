let msgBoard = {
    name: "IWP Chat",
    chatHis: [],
    callBacks: [],
    putMessage: function (message){this.chatHis[this.chatHis.length] = message},
    printMessages: function(){
                            console.log(`Message his for ${this.name} is: `)
                            this.chatHis.forEach(message => console.log(message))
                        },
    registar: function(f){this.callBacks.push(f)},
    sendAndNotifyMessage: function (message){
        this.putMessage(message);
        this.callBacks.forEach(callBacks => callBacks(this.name,message));
    }
}

function MessageBoard(name){
    this.name = name;
    this.chatHis = [];
    this.callBacks = new Array;
    
    this.registar = function(f){this.callBacks.push(f)};
    
    this.putMessage = message => this.chatHis.push(message);
    
    this.printMessages = function(){
        console.log(`Message his for ${this.name} is: `)
        this.chatHis.forEach(message => console.log(message))}

    this.sendAndNotifyMessage = function (message){
        this.putMessage(message);
        this.callBacks.forEach(callBacks => callBacks(this.name,message));}
}


/*msgBoard.putMessage("Hej, dette er en test")
msgBoard.putMessage("det er fanme godt med dig")
msgBoard.putMessage("FUCK JEG ELSKER KAGE")
msgBoard.putMessage("ja same")
msgBoard.putMessage("same")

msgBoard.printMessages();
//console.log("\n\n"+msgBoard.chatHis);

msgBoard.registar((board,message)=>console.log(`Board ${board} says: ${message}`));

console.log("\n\n");
msgBoard.sendAndNotifyMessage("READ THIS FAST: ");

console.log("\n\n");
function briansHandler(boardName,message){
    console.log(`Brian! A message from ${boardName}: ${message}`);
    }
msgBoard.registar(briansHandler);
msgBoard.registar((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")*/

let board2 = new MessageBoard("Opgave regning");
board2.putMessage("Hej, dette er en test");
board2.printMessages();

console.log("\n\ndone");
