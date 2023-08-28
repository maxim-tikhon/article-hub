import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(cls.profileCard, cls.loading, className)}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={classNames(cls.profileCard, cls.error, className)}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Upload error')}
          text={t('Try to reload page')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack gap="8" max className={classNames(cls.profileCard, className, { [cls.editing]: !readOnly })}>
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('First name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readOnly={readOnly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Last name')}
        className={cls.input}
        onChange={onChangeLastname}
        readOnly={readOnly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <Input
        value={data?.username}
        placeholder={t('Username')}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Enter avatar link')}
        className={cls.input}
        onChange={onChangeAvatar}
        readOnly={readOnly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readOnly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readOnly}
      />
    </VStack>
  );
};
