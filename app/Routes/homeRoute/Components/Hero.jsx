import Link from "next/link";
import style from "../../../css/home.module.css";

export default function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        <h1>Upload & <br /> <span>Print</span></h1>
        <span>India First Online Print On Demand Service</span> 
        <br />
      </div>
        <Link href="/handleUpload">
      <div className={style.print}>
          <span>Print My Document</span>
        <i className="ri-arrow-right-line"></i>
      </div>
        </Link>
    </div>

  );
}
