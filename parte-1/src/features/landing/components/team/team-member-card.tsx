import Image from "next/image";
import Link from "next/link";

import { TEAM_ASSETS, type TeamMember } from "./team-data";

import { TeamAvatar } from "./team-avatar";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article
      className={`box-border flex w-[387px] max-w-full flex-col rounded-[45px] border border-brand-dark bg-white px-[35px] py-10 shadow-[0px_5px_0px_0px_#191a23] ${member.cardMinHeightClass}`}
    >
      <div className='flex flex-col gap-7'>
        <div className='flex items-start gap-5'>
          <TeamAvatar
            photoSrc={member.photo}
            crop={member.crop}
            photoAlt={`${member.name}, ${member.role}`}
          />
          <div className='flex min-w-0 flex-1 flex-col gap-4'>
            <div className='flex justify-end'>
              <Link
                href='#contact'
                className='size-[34px] shrink-0'
                aria-label={`LinkedIn — ${member.name}`}
              >
                <Image
                  src={TEAM_ASSETS.socialIcon}
                  alt=''
                  width={34}
                  height={34}
                  className='size-[34px]'
                />
              </Link>
            </div>
            <div className='flex flex-col gap-1'>
              <h4 className='m-0 font-medium leading-tight text-type-h4 text-black md:text-type-h4-dsk'>
                {member.name}
              </h4>
              <p className='m-0 font-normal leading-tight text-type-p text-black md:leading-normal md:text-type-p-dsk'>
                {member.role}
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-px w-[317px] max-w-full shrink-0'>
          <Image
            src={TEAM_ASSETS.divider}
            alt=''
            width={317}
            height={2}
            className='h-auto w-full max-w-[317px]'
          />
        </div>
        <div className='max-w-[317px] font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal'>
          <p>{member.bio}</p>
          {member.bioExtra ? <p className='mt-1'>{member.bioExtra}</p> : null}
        </div>
      </div>
    </article>
  );
}
