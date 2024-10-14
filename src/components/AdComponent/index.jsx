import { useEffect } from 'react';
import PropTypes from 'prop-types';

const GoogleAd = ({ slot }) => {
  useEffect(() => {
    // Aguarde um pouco para garantir que o layout esteja pronto
    const timer = setTimeout(() => {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }, 500); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '250px' }}
        data-ad-client="ca-pub-1652353200931683"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

GoogleAd.propTypes = {
  slot: PropTypes.string.isRequired,
};

export default GoogleAd;
