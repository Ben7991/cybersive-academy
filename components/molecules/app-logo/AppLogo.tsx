import Image from 'next/image'

export default function AppLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/img/logo.png"
        alt="Fortinode Technologies"
        width={200}
        height={35}
      />
    </div>
  )
}
