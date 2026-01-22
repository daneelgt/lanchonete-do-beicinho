export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-300/50 text-primary-content p-2 ">
      <div className="container">
        {/* Logo */}
        <div className="flex justify-center p-3">
          <img
            src="/assets/images/image.png"
            alt="logo-beicinho"
            className="max-h-27"
          />
        </div>

        {/* endereço e contato */}
        <div className="flex gap-3 text-center justify-center p-2 ">
          <a
            className="text-decoration-none text-black text-2xl font-medium"
            href="https://www.google.com/maps/place/R.+Imb%C3%A9+-+Cai%C3%A7aras,+Belo+Horizonte+-+MG,+30770-520,+Brasil/@-19.905046,-43.966401,13z/data=!4m6!3m5!1s0xa6973469eab479:0xda5bf3acaf131c44!8m2!3d-19.9050456!4d-43.9664013!16s%2Fg%2F1ymwywt40?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
          >
            Endereço
          </a>
          <a
            className="text-decoration-none text-black text-2xl font-medium"
            href="https://api.whatsapp.com/send/?phone=553100000000&text&type=phone_number&app_absent=0"
          >
            Contato
          </a>
        </div>

        {/* social midia*/}
        <div className="flex justify-center space-x-2 p-2">
          <div className="flex justify-center space-x-2 gap-3 ">
            <a
              href="#1"
              className="">
              <img src="/assets/images/iFood.png" alt="ifood-icon" className="w-auto h-15 " />
            </a>
            <a
              href="#2"
              className="">
              <img src="/assets/images/99Food.png" alt="99food-icon" className="w-auto h-15" />
            </a>
            <a
              href="#3"
              className="">
              <img src="/assets/images/instagram.png" alt="instagram-icon" className="w-auto h-14" />
            </a>
          </div>
        </div>

        {/* copyright */}
        <div className="font-stretch-75%  block mb-4 text-sm text-center pt-4">
          <p>
            Copyright © 2026 - Sundria e Ninhoo
          </p>
        </div>

      </div>
    </footer >
  );
}

