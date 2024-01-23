import { SectionButton } from "./styles";

export function Header() {
  return (
    <>
      <div>
        <SectionButton>
          <button>Home</button>
          <button>Projects</button>
        </SectionButton>
        <SectionButton>
          <button>Email</button>
          <button>LinkedIn</button>
          <button>Github</button>          
        </SectionButton>
      </div>
    </>
  );
}
