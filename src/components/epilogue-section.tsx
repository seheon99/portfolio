import { Heading, Text, Link } from "./base";
import { GithubIcon } from "./icons/github-icon";

export function EpilogueSection() {
  return (
    <div className=" h-screen w-300 bg-stone-200 p-10">
      <Heading className="text-7xl!">
        안녕하세요 <span className="text-8xl">유세헌</span>입니다
      </Heading>
      <Heading className="text-3xl!">Hello, I'm Seheon Yu</Heading>
      <Text className="mt-20 text-2xl/loose!">
        지금까지 제가 참여한 프로젝트들을 전시처럼 구성해봤습니다.
        <br />
        I've curated this exhibition with the projects I've worked on so far.
        <br />
        <br />
        하지만 제가 진짜 그리고 싶은 장면은 앞으로의 이야기입니다.
        <br />
        But the scene I truly wish to draw is the story yet to come.
        <br />
        <br />
        계속 배우고 성장하며, 새로운 기술을 서비스에 녹여낼 기회를 찾고
        있습니다.
        <br />
        I keep learning and growing, seeking chances to blend new technologies
        into real experiences.
        <br />
        <br />
        시간 내어 방문해주셔서 감사합니다.
        <br />
        Thank you for taking the time to visit.
        <br />
        <br />
        <Link href="https://github.com/seheon99" target="_blank">
          <GithubIcon className="size-12" />
        </Link>
      </Text>
    </div>
  );
}
