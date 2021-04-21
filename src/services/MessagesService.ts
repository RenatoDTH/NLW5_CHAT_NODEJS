import { getCustomRepository, Repository } from 'typeorm';
import { Message } from '../entities/Message';
import { MessageRepository } from '../repositories/MessageRepository';

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessageRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate): Promise<Message> {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string): Promise<any> {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}

export { MessagesService };
