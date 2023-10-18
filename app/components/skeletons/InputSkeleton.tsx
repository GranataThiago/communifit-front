import React from 'react'
import { Skeleton } from '../ui/skeleton';

interface ICardSkeletonProps {
  parentContainerStyles?:string;
  mainContainerStyles?: string;
  imageSkeletonStyles?: string;
  titleDescriptionContainerStyles? :string;
  titleSkeletonStyles?: string;
  descriptionSkeletonStyles?: string;

}

const InputSkeleton = ({parentContainerStyles, mainContainerStyles = "gap-14", imageSkeletonStyles, titleDescriptionContainerStyles = 'w-[60%]', titleSkeletonStyles, descriptionSkeletonStyles }:ICardSkeletonProps) => {
  return (
    <div className={`  rounded-lg bg-gray-400  ${parentContainerStyles}`}>
            <div
                className={`${mainContainerStyles} flex h-full flex-row  `}
            >
                <Skeleton className={`h-full w-rounded-lg animate-pulse bg-gray-400 dark:bg-gray-700 ${imageSkeletonStyles}`} />
            </div>
    </div>
  )
}

export default InputSkeleton