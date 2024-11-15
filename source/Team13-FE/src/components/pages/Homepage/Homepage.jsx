import React, { Suspense } from "react";
import Loadingpage from "../Loadingpage/Loadingpage";



const Items = React.lazy(() => import("../../Items/Items"))
export default function Homepage() {
  return (
    <div>
      <Suspense fallback={<Loadingpage/>}>
        <Items />
      </Suspense>
    </div>
  );
}
