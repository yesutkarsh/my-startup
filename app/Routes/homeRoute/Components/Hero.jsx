import style from "../../../css/home.module.css";

export default function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        <h1>Upload & <br /> <span>Print</span></h1>
        <span>India First Online Print On Demand Service</span> 
        <br />
      </div>
        <div className={style.print}>
          <span>Pritn My Document</span>
          <i class="ri-arrow-right-line"></i>

        </div>
    </div>
  );
}
