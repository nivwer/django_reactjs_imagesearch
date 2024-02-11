import SearchForm from "@/components/forms/SearchForm/SearchForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GiHastyGrave } from "react-icons/gi";

function Header() {
  return (
    <>
      <div className="container max-w-4xl mx-auto p-0 sm:pt-4 sm:px-4">
        <Card className="w-full p-2 sm:p-8">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <div className="flex justify-between">
                Search <GiHastyGrave />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SearchForm />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Header;