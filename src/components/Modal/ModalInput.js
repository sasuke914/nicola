import { ModalInputTitle } from "../../constant/group";

const ModalInput = () => {
  return (
    <div className="modalInputConta">
      {ModalInputTitle.map((item, index) => (
        <label key={index} className="inpD">
          <input id="inp" placeholder="&nbsp;" />
          <span className="labelD">{item}</span>
          <span className="focus-bgD"></span>
        </label>
      ))}
    </div>
  );

};

export default ModalInput;
