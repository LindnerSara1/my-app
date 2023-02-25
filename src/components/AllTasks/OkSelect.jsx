import swal from "sweetalert";
const OkSelect =(props)=>{
    const {savedInDb, setSavedInDb} = props;
    const alert=()=>{
        swal({
            title: "okselectנקלט בהצלחה",
            text: "זכית להיות חלק משותפים+  אשריך!",
            icon: "success",
            button: "ok",
          })
          setSavedInDb(false);
    }
    return <>{savedInDb && alert()}</>
}
export default OkSelect;