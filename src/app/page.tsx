import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" topdesu ">
        <span className="text-6xl text-white text-center">
          快適な旅ときれいな自然
        </span>
      </div>
      <div className="mt-5 min-h-full flex justify-center">
        <div className="">
          <div className="border-b-2 border-blue-300 after:border-yellow-100">
            <span>お知らせ</span>
          </div>
          <div>
            <span>現在開発中です! 状況はこちらから確認してください!</span>
          </div>
        </div>
      </div>
    </>
  );
}
