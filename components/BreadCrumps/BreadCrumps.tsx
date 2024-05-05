import Link from 'next/link';
import { useRouter } from 'next/navigation';
 

const BreadCrumps = () => {
  const router = useRouter();
  const { pathname }:any = router;
//   console.clear()
//   console.log(router)
//   console.log(router.back())
//   console.log(router.forward())

  // Split the pathname into segments
//   const segments = pathname.split('/').filter(segment => segment !== '');

  return (<>
   {pathname}
  </>
  );
};

export default BreadCrumps;
