import Image from "next/image";
import "./cube3d.css";

export default function Cube3d({ texture }: { texture: string }) {
  return (
    <div className="cube-wrap">
      <div className="box">
        <div className="single-box side-back">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="single-box side-top">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="single-box side-bottom">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="single-box side-left">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="single-box side-right">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="single-box side-front">
          <Image
            src={texture}
            alt=""
            width={160}
            height={160}
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
