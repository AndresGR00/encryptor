import { Button } from "./components/buttons/button";
import { Header } from "./components/header/header";
import { Main } from "./components/mainHTML/mainHTML";
import { Output } from "./components/output/output";
import { TextInput } from "./components/textInputs/textInput";
import { decrypt } from "./data/buttonsFunctions/decrypt";
import { encrypt } from "./data/buttonsFunctions/encrypt";
import "./style.css";


const printMain = () => {
    Main();
    TextInput('Text to encrypt/decrypt', 'text');
    TextInput('Key','key');
    Button('encrypt', encrypt);
    Button('decrypt', decrypt);
    Output();
};

Header();
printMain();