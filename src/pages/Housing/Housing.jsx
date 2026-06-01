import { Suspense, useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router";
import { getDataById } from "../../services/API/getDatas.js";
import HousingDetails from "../../components/HousingDetails";
import Loader from "../../components/Loader/Loader.jsx";

export default function Housing() {
  const param = useParams();
  const location = useLocation();

  const memoAPI = useMemo(
    () => (location.state ? null : getDataById(param.id)),
    [location.state, param.id],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <section>
      <Suspense fallback={<Loader />}>
        <HousingDetails
          linkState={
            location.state ? { state: "fulfilled", data: location.state } : null
          }
          promise={memoAPI}
        />
      </Suspense>
    </section>
  );
}
