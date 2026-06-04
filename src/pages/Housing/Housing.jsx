import { Suspense, useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router";
import { getDataById } from "../../services/API/getDatas.js";
import HousingDetails from "../../components/HousingDetails";
import Loader from "../../components/Loader/Loader.jsx";

/**
 * Récupère, et envoie les données détaillées du logement au composant HousingDetails.
 *
 * Les données peuvent venir soit :
 *  - du state passé en paramètre si on clique sur un vignette de la page d'accueil.
 *  - de l'API si on entre l'url directement.
 *
 */

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
