import { MainLayoutProperties } from "./main-layout-properties.interface";
import { HeaderTitle } from "./components/header-title/header-title.component";
import { getCookie } from "common/helpers/cookie.helper";
import { HeaderNavigation } from "./components/header-navigation.component";

export async function MainLayout({ children }: MainLayoutProperties) {
  const theme = await getCookie();

  return (
    <div className="container max-w-7xl min-w-mobile mx-auto p-10">
      <header className="flex justify-between mb-10">
        <HeaderTitle theme={theme} />
        <HeaderNavigation />
      </header>
      <main>{children}</main>
    </div>
  );
}
