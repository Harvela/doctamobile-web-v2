// import { Modal, TextInput } from 'flowbite-react';
// import { useState } from 'react';
// import type { SubmitHandler } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
// import PackageSelect from 'react-select';

// import { postApi } from '../../utils/api';

// const options = [
//   { id: 1, label: 'Des membres de plus de 70' },
//   { id: 2, label: 'Des membres  avec maladie chronique' },
//   { id: 3, label: 'Des enfants' },
// ];

// const packages = [
//   {
//     id: 1,
//     name: 'JAMAA  20-35 USD/mois',
//   },
//   {
//     id: 2,
//     name: 'AFYA  40-85 USD/mois',
//   },
//   {
//     id: 3,
//     name: 'VIP  90-200 USD/mois',
//   },
// ];

// export type SubscriptionProps = {
//   setData: (data: any) => void;
//   data: any;
//   setStep: (step: number) => void;
//   step: number;
//   email?: string;
// };

// export type SubscriptionType = {
//   id: string;
//   fullName: string;
//   patient: string;
//   numberOfMembers: string;
//   typeOfMembers: string;
//   package: string;
//   address: string;
//   budget: string;
// };

// export const SubscriptionForm: React.FC<SubscriptionProps> = ({
//   setData,
//   data,
// }) => {
//   const DropdownIndicator = () => null;
//   const NoControlInput = () => null;

//   const { handleSubmit } = useForm<SubscriptionType>({
//     defaultValues: data,
//   });

//   const [step, setStep] = useState(1);

//   const onSubmit: SubmitHandler<SubscriptionType> = async (submittedData) => {
//     try {
//       await postApi('subscription', submittedData);
//       setStep(5);
//     } catch (error) {
//       console.error('Form submission error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {step === 1 && (
//         <Modal show position="center">
//           <Modal.Header className="border-0">
//             <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
//               Demande d&apos;abonnement
//             </h3>
//           </Modal.Header>
//           <Modal.Body className="flex flex-col gap-5">
//             <div>
//               <span className="text-[14px] font-semibold text-blue">
//                 Comment on vous appelle
//               </span>
//               <TextInput
//                 name="fullName"
//                 className="mt-[10px] border-0 text-blue"
//                 onChange={setData}
//               />
//             </div>
//             <div>
//               <span className="text-[14px] font-semibold text-blue">
//                 Votre menage a combien de membres ?
//               </span>
//               <TextInput
//                 name="numberOfMembers"
//                 className="mt-[10px]"
//                 onChange={setData}
//               />
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <button
//               className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
//               onClick={() => {
//                 setStep(2);
//               }}
//             >
//               Continuer
//             </button>
//           </Modal.Footer>
//         </Modal>
//       )}

//       {step === 2 && (
//         <Modal show position="center">
//           <Modal.Header className="border-0">
//             <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
//               Demande d&apos;abonnement
//             </h3>
//           </Modal.Header>
//           <Modal.Body className="flex flex-col">
//             <div>
//               <span className="text-[14px] font-semibold text-blue">
//                 Votre menage a :
//               </span>

//               <div className="mt-[24px] flex flex-col gap-4">
//                 {options.map((option) => (
//                   <label key={option.id} className="text-sm text-blue">
//                     <input
//                       name="typeOfMembers"
//                       type="checkbox"
//                       className="mr-[10px]"
//                       onChange={setData}
//                     />
//                     {option.label}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <button
//               className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
//               onClick={() => {
//                 setStep(3);
//               }}
//             >
//               Continuer
//             </button>
//           </Modal.Footer>
//         </Modal>
//       )}

//       {step === 3 && (
//         <Modal show position="center">
//           <Modal.Header className="border-0">
//             <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
//               Demande d&apos;abonnement
//             </h3>
//           </Modal.Header>
//           <Modal.Body className="flex flex-col gap-5">
//             <div>
//               <span className="text-[14px] font-semibold text-blue">
//                 Vous vivez A : ( tapez le nom quartier, avenue ou ville )
//               </span>
//               <TextInput
//                 name="address"
//                 className="mt-[10px] border-0 text-blue"
//                 onChange={setData}
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <span className="text-[14px] font-semibold text-blue">
//                   Votre budget est de :
//                 </span>
//                 <TextInput
//                   name="budget"
//                   className="mt-[10px] border-0 text-blue"
//                   onChange={setData}
//                 />
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <button
//               className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
//               onClick={() => {
//                 setStep(4);
//               }}
//             >
//               Continuer
//             </button>
//           </Modal.Footer>
//         </Modal>
//       )}

//       {step === 4 && (
//         <Modal show position="center">
//           <Modal.Header className="border-0">
//             <p className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
//               Demande d&apos;abonnement
//             </p>
//           </Modal.Header>
//           <Modal.Body className="flex flex-col gap-5">
//             <div>
//               <span className="text-[14px] font-semibold text-blue">
//                 Quel paquet d’abonnement voulez vous ?
//               </span>
//               <div className="h-[100px]">
//                 <PackageSelect
//                   name="package"
//                   menuIsOpen
//                   unstyled
//                   options={packages.map((pack) => ({
//                     label: pack.name,
//                     value: pack.name,
//                     name: pack.name,
//                   }))}
//                   onChange={setData}
//                   components={{
//                     DropdownIndicator,
//                     Control: NoControlInput,
//                   }}
//                   isSearchable={false}
//                   styles={{
//                     option: (base) => {
//                       return {
//                         ...base,
//                         backgroundColor: '#F6FAFF',
//                         color: '#001344',
//                         fontWeight: '600',
//                         fontSize: '12px',
//                         padding: '8px',
//                         borderRadius: '4px',
//                         marginTop: '10px',
//                       };
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <button
//               className="rounded-lg bg-primary-900 px-4 py-2 text-sm text-white"
//               onClick={() => {
//                 setStep(5);
//               }}
//             >
//               Continuer
//             </button>
//           </Modal.Footer>
//         </Modal>
//       )}

//       <Modal show position="center">
//         <Modal.Header className="border-0">
//           <h3 className="rounded- ml-[-20px] mt-[-20px] rounded-t-[15px]  rounded-br-[15px] bg-blue/10 p-4 text-[14px] font-semibold text-blue">
//             Demande d&apos;abonnement
//           </h3>
//         </Modal.Header>
//         <Modal.Body className="flex flex-col">
//           <button
//             className="m-auto w-[40%] rounded-lg bg-primary-900/10 px-4 py-2 text-sm text-blue"
//             type="submit"
//           >
//             Creer un compte
//           </button>
//         </Modal.Body>
//       </Modal>
//     </form>
//   );
// };
