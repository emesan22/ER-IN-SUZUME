import Link from "next/link";

export default function Footer() {
  const siteURLs = [
    { name: "Home", url: "/" },
    { name: "ニュース", url: "/news" },
    { name: "路線図・駅", url: "/route-map" },
    { name: "概要", url: "/about" },
    { name: "プライバシーポリシー", url: "/privacy-policy" },
    { name: "お問い合わせ", url: "/contact" },
  ];
  return (
    <footer className="shadow shadow-black py-5">
      <div className="flex justify-evenly ">
        <span>ER in Suzume Server</span>
        <div className="px-5 py-15 ">
          <ul className="flex border-b">
            {siteURLs.map((item) => (
              <li key={item.name} className="p-2">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 px-5 py-15 flex justify-center">
        <span>
          ※このサイトはすずめサーバーへのサイトです! 実在しない鉄道会社です。
        </span>
      </div>
    </footer>
  );
}
